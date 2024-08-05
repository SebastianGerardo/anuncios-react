import PropTypes from "prop-types";
import { useEffect } from "react";
// apis
import { getProvinces } from "@/apis/general/apiLocations";
// hooks
import { useAsyncStates } from "../general/useAsyncStates";

export const useProvinceOptions = ({ idDepartment }) => {
  const { data, setData, isLoading, setIsLoading } = useAsyncStates();

  useEffect(() => {
    if (idDepartment?.length > 0) {
      setIsLoading(true);

      getProvinces(idDepartment)
        .then(({ statusCode, data }) => {
          if (statusCode === 200) {
            const options = data?.map(({ name, province }) => ({
              label: name,
              value: province,
            }));

            setData(options);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [idDepartment]);

  return {
    optionsProvinces: data,
    isProvincesLoaded: isLoading,
  };
};

useProvinceOptions.propTypes = {
  idDepartment: PropTypes.string.isRequired,
};
