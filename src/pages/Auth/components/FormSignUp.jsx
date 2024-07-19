// components
import { Button, Input } from "@/components";
import { ErrorMessage } from "@/components/general/ErrorMessage";
import { HeaderForm } from "./HeaderForm";
// hooks
import { useForm } from "react-hook-form";
// utils
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormSignUp = ({ onSubmit, error, isFetching }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      names: "",
      lastNames: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <HeaderForm label="¡Crea tu cuenta!" />
      <ErrorMessage message={error && "Revisa bien los datos ingresados."} />
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
          <Input
            label="Nombres"
            name="names"
            placeholder="Ej: Juan Ricardo"
            control={control}
          />
          <Input
            label="Apellidos"
            name="lastNames"
            placeholder="Ej: Valentín Monserat"
            control={control}
          />
        </div>
        <Input
          label="Correo"
          name="email"
          placeholder="Ej: example@gmail.com"
          control={control}
        />
      </div>
      <div className="mt-8">
        <Button disabled={isFetching} variant="black" className="w-full">
          Crear cuenta
        </Button>
      </div>
    </form>
  );
};

const schema = Yup.object().shape({
  names: Yup.string().required("Los nombres son obligatorios."),
  lastNames: Yup.string().required("Los apellidos son obligatorios."),
  email: Yup.string()
    .email("El correo tiene que ser válido.")
    .required("El correo es obligatorio."),
});
