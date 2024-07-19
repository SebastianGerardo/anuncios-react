import { useEffect } from "react";
// hooks
import { useAsyncStates } from "@/hooks/general/useAsyncStates";
// apis
import { getUserPosts } from "@/apis/posts/apiPosts";

export const useUserPosts = () => {
  const { error, setError, isLoading, setIsLoading, data, setData } = useAsyncStates();

  useEffect(() => {
    setIsLoading(true);
    getUserPosts()
      .then(({ message, data }) => {
        if (message === "POSTS_FOUND") {
          setData(data);
        }
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    error,
    data,
  };
};
