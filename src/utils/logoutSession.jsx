
export const logoutSession = (navigate) => {

  localStorage.removeItem("tokenUser");
  navigate("/", { state: { logged: false } });
};
