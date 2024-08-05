import { useForm } from "react-hook-form";
// components
import { Button, Input } from "@/components";
import { Select } from "@/components/inputs/Select";
// helpers
import { optionsTypeTime } from "@/helpers/optionsTypeTime";
// utils
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const ModalPrices = ({ price, formPosts, closeModal }) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: price || {},
    resolver: yupResolver(validationSchema),
  });

  const { id } = watch();

  const onSubmit = (values) => {
    if (id) {
      const newPrices = formPosts.watch("prices").map((price) => {
        if (price.id == id) {
          return { id, ...values };
        } else {
          return price;
        }
      });

      formPosts.setValue("prices", newPrices);
    } else {
      formPosts.setValue("prices", [
        ...formPosts.watch("prices"),
        { id: formPosts.watch("prices").length + 1, ...values },
      ]);
    }
    closeModal();
  };

  const deletePrice = () => {
    const newPrices = formPosts
      .watch("prices")
      .filter((price) => price.id !== id);
    formPosts.setValue("prices", newPrices);
    closeModal();
  };

  return (
    <section className="xl:min-w-[23rem]">
      <h1 className="font-bold text-2xl mb-2">Precio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-2">
        <Input label="Tiempo" name="time" type="number" control={control} />
        <Select name="typeTime" options={optionsTypeTime} control={control} />
      </div>
      <Input type="number" label="Precio" name="price" control={control} />
      <div className="flex justify-end items-center  mt-2">
        {id && (
          <Button type="button" onClick={deletePrice}>
            Eliminar
          </Button>
        )}
        <Button type="button" onClick={handleSubmit(onSubmit)}>
          Guardar
        </Button>
      </div>
    </section>
  );
};

const validationSchema = Yup.object().shape({
  time: Yup.number()
    .typeError("Este campo es obligatorio")
    .required("Este campo es obligatorio"),
  typeTime: Yup.string().required("Este campo es obligatorio"),
  price: Yup.number()
    .typeError("Este campo es obligatorio")
    .required("Este campo es obligatorio"),
});
