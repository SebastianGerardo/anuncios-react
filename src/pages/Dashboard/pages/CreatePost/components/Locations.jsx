import { Select } from "@/components/inputs/Select";
import { useLocationOptions } from "@/hooks/locations/useLocationOptions";

export const Locations = ({ control, locations }) => {
  const { optionsDepartments, optionsDistricts, optionsProvinces } =
    useLocationOptions({ locations });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Select
        label="Departamento"
        name="locations.department"
        options={[{ label: "Selecciona", value: "" }, ...optionsDepartments]}
        control={control}
      />
      <Select
        label="Provincia"
        name="locations.province"
        options={[{ label: "Selecciona", value: "" }, ...optionsProvinces]}
        control={control}
      />
      <Select
        label="Distrito"
        name="locations.district"
        options={[{ label: "Selecciona", value: "" }, ...optionsDistricts]}
        control={control}
      />
    </div>
  );
};
