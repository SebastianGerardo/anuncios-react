import PropTypes from "prop-types";
import { useEffect } from "react";
// apis
import { getDistricts } from "@/apis/general/apiLocations";
// hooks
import { useAsyncStates } from "../general/useAsyncStates";

export const useDistrictOptions = ({ idDepartment, idProvince }) => {
  const { data, setData, isLoading, setIsLoading } = useAsyncStates();

  useEffect(() => {
    if (idDepartment?.length > 0 && idProvince?.length > 0) {
      setIsLoading(true);

      getDistricts(idDepartment, idProvince)
        .then(({ statusCode, data }) => {
          if (statusCode === 200) {
            const options = data?.map(({ name, district }) => ({
              label: name,
              value: district,
            }));

            setData(options);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [idDepartment, idProvince]);

  return {
    optionsDistricts: data,
    isDistrictLoaded: isLoading,
  };
};

useDistrictOptions.propTypes = {
  idDepartment: PropTypes.string.isRequired,
  idProvince: PropTypes.string.isRequired,
};
