// apis
import { recoverPassword } from "@/apis/auth";
// hooks
import { useAsyncStates } from "@/hooks/general/useAsyncStates";

export const useRecoverPassword = () => {
  const { error, setError, isSubmit, setIsSubmit, isFetched, setIsFetched } = useAsyncStates();

  const onSubmit = (values) => {
    setError(null);
    setIsFetched(true);
    recoverPassword(values)
      .then(({ message }) => {
        if (message === "EMAIL_SENT") {
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
