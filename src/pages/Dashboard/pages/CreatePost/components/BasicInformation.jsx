import { Input } from "@/components";

export const BasicInformation = ({ control }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="col-span-2">
        <Input label="Título" name="title" control={control} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Input label="Nombre" name="name" control={control} />
        <Input label="Edad" name="age" type="number" control={control} />
        <Input label="Celular" name="mobile" type="number" control={control} />
      </div>
    </div>
  );
};
