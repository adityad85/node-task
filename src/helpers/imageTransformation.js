import sharp from 'sharp';

export const transformImage = (data, { format, width, height }) => {
  let transform = sharp();
  if (format) {
    transform = transform.toFormat(format);
  }
  if (width || height) {
    transform = transform.resize(width, height);
  }
  return data.pipe(transform);
};
