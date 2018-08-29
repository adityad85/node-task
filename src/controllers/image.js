import fs from 'fs';
import request from 'request';
import sharp from 'sharp';

// const filename = 'steve.jpeg';
// const url = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg';

const downloadImage = async (filename, url) => {
  await request.head(url, (_err, res) => {
    console.log('content-type', res.headers['content-type']);
    console.log('content-length', res.headers['content-length']);
    request(url).pipe(fs.createWriteStream(filename)).on('close', () => {
      console.log('done');
    });
  });
};


const resize = (path, format, width, height) => {
  const readStream = fs.createReadStream(path);
  let transform = sharp();
  if (format) {
    transform = transform.toFormat(format);
  }
  if (width || height) {
    transform = transform.resize(width, height);
  }

  return readStream.pipe(transform);
};
const sendImage = async (req, res) => {
  const { format, url } = req.query;
  const finalFormat = format || 'jpeg';
  const file = `image.${finalFormat}`;
  res.type(`image/${finalFormat}`);
  await downloadImage(file, url);
  resize(file, finalFormat, 50, 50).pipe(res);
};


// request({ url, encoding: null }, (err, res, buffer) => {
//   console.log(buffer);
// });

export default {
  downloadImage,
  resize,
  sendImage,
};
