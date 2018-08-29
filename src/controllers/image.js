import fs from 'fs';
import request from 'request';
import sharp from 'sharp';

// const filename = 'steve.jpeg';
// const url = 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg';

const downloadImage = async (url, format) => {

  const width = 50;
  const height = 50;
  const headhere = await request.head(url);
  console.log('content-type', headhere.headers['content-type']);
  // console.log('content-length', res.headers['content-length']);

  let transform = sharp();
  if (format) {
    transform = transform.toFormat(format);
  }
  if (width || height) {
    transform = transform.resize(width, height);
  }


  const data = request(url).pipe(transform);
  return data;
};


const resize = (path, format, width, height) => {
  const readStream = fs.createReadStream(path);
  // let transform = sharp();
  // if (format) {
  //   transform = transform.toFormat(format);
  // }
  // if (width || height) {
  //   transform = transform.resize(width, height);
  // }

  return readStream.pipe(transform);
};
const sendImage = async (req, res) => {
  const { url, format } = req.query;
  const finalFormat = format || 'jpeg';
  res.type(`image/${finalFormat}`);
  const data = await downloadImage(url, finalFormat);
  data.pipe(res);
  // resize(file, finalFormat, 50, 50).pipe(res);
};


// request({ url, encoding: null }, (err, res, buffer) => {
//   console.log(buffer);
// });

export default {
  downloadImage,
  resize,
  sendImage,
};
