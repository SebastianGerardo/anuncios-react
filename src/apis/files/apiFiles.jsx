import { apiBody } from "@/apis/config/apiBody";
import { getTokenUser } from "@/utils/getTokenUser";

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await apiBody.post(`/files/upload-image`, formData, {
    headers: {
      Authorization: `Bearer ${getTokenUser()}`,
    },
  });

  return data;
};

export const uploadVideo = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await apiBody.post(`/files/upload-video`, formData, {
    headers: {
      Authorization: `Bearer ${getTokenUser()}`,
    },
  });

  return data;
};
