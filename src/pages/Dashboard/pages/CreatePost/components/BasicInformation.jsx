import { Input } from "@/components";
import { Select } from "@/components/inputs/Select";

export const BasicInformation = ({ control }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="lg:col-span-2">
        <Input label="Título" name="title" control={control} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Input label="Nombre" name="name" control={control} />
        <Input label="Edad" name="age" type="number" control={control} />
        <Input label="Celular" name="phone" type="number" control={control} />
        <Select
          label="Nacionalidad"
          name="country"
          options={optionsNationality}
          control={control}
        />
      </div>
    </div>
  );
};

const optionsNationality = [
  {
    label: "Selecciona",
    value: "",
  },
  {
    label: "Peruana",
    value: "Peruana",
  },
  {
    label: "Colombiana",
    value: "Colombiana",
  },
  {
    label: "Venezolana",
    value: "Venezolana",
  },
  {
    label: "Dominicana",
    value: "Dominicana",
  },
  {
    label: "Argentina",
    value: "Argentina",
  },
];
