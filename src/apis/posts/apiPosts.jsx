import { getTokenUser } from "@/utils/getTokenUser";
import { apiBody } from "@/apis/config/apiBody";

export const getUserPosts = async () => {
  const { data } = await apiBody.get(`/posts`, {
    headers: {
      Authorization: `Bearer ${getTokenUser()}`,
    },
  });

  return data;
};

export const createPost = async (body) => {
  const { data } = await apiBody.post(`/posts`, body, {
    headers: {
      Authorization: `Bearer ${getTokenUser()}`,
    },
  });

  return data;
};