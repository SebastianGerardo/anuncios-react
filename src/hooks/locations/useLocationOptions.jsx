// hooks
import { useDepartmentOptions } from "@/hooks/locations/useDepartmentOptions";
import { useProvinceOptions } from "@/hooks/locations/useProvinceOptions";
import { useDistrictOptions } from "@/hooks/locations/useDisctrictOptions";

export const useLocationOptions = ({ locations = {} }) => {
  const { department, province } = locations;

  const { optionsDepartments = [] } = useDepartmentOptions();

  const { optionsProvinces = [] } = useProvinceOptions({
    idDepartment: department,
  });

  const { optionsDistricts = [] } = useDistrictOptions({
    idDepartment: department,
    idProvince: province,
  });

  return {
    optionsDepartments,
    optionsProvinces,
    optionsDistricts,
  };
};
