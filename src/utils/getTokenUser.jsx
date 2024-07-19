export const getTokenUser = () => {
  const token = localStorage.getItem("tokenUser")

  return token;
};
