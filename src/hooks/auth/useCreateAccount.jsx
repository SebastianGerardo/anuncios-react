// apis
import { signUpAccount } from "@/apis/auth";
// hooks
import { useAsyncStates } from "@/hooks/general/useAsyncStates";

export const useCreateAccount = () => {
  const { error, setError, isSubmit, setIsSubmit, isFetched, setIsFetched } = useAsyncStates();

  const onSubmit = (values) => {
    setError(null);
    setIsFetched(true);
    signUpAccount(values)
      .then(({ message }) => {
        if (message === "CREATED_USER") {
          setIsSubmit(true);
        }
      })
      .catch(({ response: { data } }) => setError(data))
      .finally(() => setIsFetched(false));
  };
  return {
    onSubmit,
    isSubmit,
    error,
    isFetching: isFetched,
  };
};
