import { useForm } from "react-hook-form";
// components
import { Button, Input } from "@/components";
import { Select } from "@/components/inputs/Select";
// helpers
import { optionsDays } from "@/helpers/optionsDays";
// utils
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const ModalSchedules = ({ closeModal, formPosts, schedule }) => {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: schedule || {},
    resolver: yupResolver(validationSchema),
  });

  const { isEdit, day } = watch();

  const optionsFilterDays = optionsDays.filter(
    (bItem) =>
      !formPosts
        .watch("schedules")
        .filter((sch) => sch.day != day)
        .some((aItem) => aItem.day == bItem.value)
  );

  const onSubmit = ({ isEdit, ...values }) => {
    if (isEdit) {
      const newSchedules = formPosts.watch("schedules").map((schedule) => {
        if (schedule.day == schedule.day) {
          return values;
        } else {
          return schedule;
        }
      });

      formPosts.setValue("schedules", newSchedules);
    } else {
      formPosts.setValue("schedules", [
        ...formPosts.watch("schedules"),
        values,
      ]);
    }
    closeModal();
  };

  const deleteSchedule = () => {
    const newSchedules = formPosts
      .watch("schedules")
      .filter((schedule) => schedule.day !== day);
    formPosts.setValue("schedules", newSchedules);
    closeModal();
  };

  return (
    <section className="xl:min-w-[23rem]">
      <h1 className="font-bold text-2xl mb-2">Horario</h1>
      <Select
        label="Día"
        name="day"
        options={optionsFilterDays}
        control={control}
      />
      <Input type="time" label="Hora Inicio" name="start" control={control} />
      <Input type="time" label="Hora Fin" name="end" control={control} />
      <div className="flex justify-end items-center gap-2 mt-2">
        {isEdit && (
          <Button type="button" onClick={deleteSchedule}>
            Eliminar
          </Button>
        )}
        <Button onClick={handleSubmit(onSubmit)} type="button">
          Guardar
        </Button>
      </div>
    </section>
  );
};

const validationSchema = Yup.object().shape({
  day: Yup.number()
    .typeError("Este campo es obligatorio")
    .required("Este campo es obligatorio"),
  start: Yup.string().required("Este campo es obligatorio"),
  end: Yup.string().required("Este campo es obligatorio"),
});
