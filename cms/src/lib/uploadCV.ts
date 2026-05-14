import cloudinary from "./cloudinary";

export const uploadCV = async (fileBuffer: Buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "cv_uploads",
        resource_type: "auto",
      },
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );

    stream.end(fileBuffer);
  });
};