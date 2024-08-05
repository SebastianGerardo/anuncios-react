import { uploadImage, uploadVideo } from "@/apis/files/apiFiles";

export const uploadFile = async (type, file) => {
  if (type === "photos") {
    const response = await uploadImage(file[0]);
    
    return response.data.url
  } else if (type === "videos") {
    const response = await uploadVideo(file[0]);

    return response.data.url
  }
};
