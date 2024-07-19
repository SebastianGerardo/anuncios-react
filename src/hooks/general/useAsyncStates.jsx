import { useState } from "react";

export const useAsyncStates = (props) => {
  const [data, setData] = useState(props?.data || undefined);
  const [error, setError] = useState(props?.error || null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [isReFetching, setIsReFetching] = useState(false);
  const refetch = () => setIsReFetching(!isReFetching);

  return {
    data,
    setData,
    isLoading,
    setIsLoading,
    isSubmit,
    setIsSubmit,
    isFetched,
    setIsFetched,
    error,
    setError,
    isReFetching,
    refetch,
  };
};
