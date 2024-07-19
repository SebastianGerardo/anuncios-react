import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// store
import { useUserStore } from "@/stores/user.store";
// apis
import { verifyAccount } from "@/apis/auth/apiSignIn";
import { getTokenUser } from "@/utils/getTokenUser";

export async function useVerifyAccount() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const setIsLoading = useUserStore((state) => state.setIsLoading);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (pathname.includes("/auth") && getTokenUser()) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    if (getTokenUser()) {
      setIsLoading(true);
      verifyAccount()
        .then(({ message, data }) => {
          if (message === "SESSION_VALID") {
            setUser(data);
          }
        })
        .catch(() => {
          setUser({});
          localStorage.removeItem("tokenUser");
        })
        .finally(() => setIsLoading(false));
    }
  }, []);
}
