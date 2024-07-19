import { useForm } from "react-hook-form";
// components
import { Button, Input } from "@/components";
import { Select } from "@/components/inputs/Select";
// helpers
import { optionsDays } from "@/helpers/optionsDays";

export const ModalPrices = ({ schedule }) => {
  const { control, watch } = useForm({
    defaultValues: schedule || {},
  });

  const { id } = watch();

  return (
    <form>
      <h1 className="font-bold text-2xl mb-2">Precio</h1>
      <Select label="Día" name="day" options={optionsDays} control={control} />
      <Input type="time" label="Hora" name="hour" control={control} />
      <div className="flex justify-end items-center  mt-2">
        {id && <Button>Eliminar</Button>}
        <Button>Guardar</Button>
      </div>
    </form>
  );
};
