// apis
import { signInAccount } from "@/apis/auth";
// hooks
import { useNavigate } from "react-router-dom";
import { useAsyncStates } from "@/hooks/general/useAsyncStates";

export const useLoginAccount = () => {
  const { error, setError, isLoading, setIsLoading } = useAsyncStates();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setError(null);
    setIsLoading(true);
    signInAccount(values)
      .then(({ message, token }) => {
        if (message === "LOGGED_IN") {
          localStorage.setItem("tokenUser", token);
          navigate("/dashboard/user/home", { state: { logged: true } });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return {
    onSubmit,
    error,
    isLoading,
  };
};
