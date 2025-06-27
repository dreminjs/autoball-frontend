import imageCompression, { Options } from 'browser-image-compression';

export const convertToWebP = async (file: File): Promise<File> => {
  const options: Options = {
    fileType: 'image/webp',
    initialQuality: 0.8,
  };

  const webpBlob = await imageCompression(file, options);

  const newFileName = file.name.replace(/\.[^.]+$/, '.webp');
  const webpFile = new File([webpBlob], newFileName, {
    type: 'image/webp',
    lastModified: Date.now(),
  });

  console.log('Converted file:', webpFile);

  return webpFile;
};
