import { apiBody } from "@/apis/config/apiBody";
import { getTokenUser } from "@/utils/getTokenUser";

export const uploadImage = async (body) => {
  const { data } = await apiBody.post(`/files/upload-image`, body, {
    headers: {
      Authorization: `Bearer ${getTokenUser()}`,
    },
  });

  return data;
};
