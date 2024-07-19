import { apiBody } from "../config/apiBody";

export const signUpAccount = async (body) => {
  const { data } = await apiBody.post(`/auth/sign-up`, body);

  return data;
};

export const recoverPassword = async (body) => {
  const { data } = await apiBody.post(`/auth/recover-password`, body);

  return data;
};

export const createPassword = async (body, token) => {
  const { data } = await apiBody.post(`/auth/create-password`, body, {
    headers: {
      X_VALIDATE_TOKEN: token,
    },
  });

  return data;
};
