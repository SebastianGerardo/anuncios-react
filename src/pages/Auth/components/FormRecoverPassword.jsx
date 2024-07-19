// components
import { Button, Input } from "@/components";
import { ErrorMessage } from "@/components/general/ErrorMessage";
// hooks
import { useForm } from "react-hook-form";
// utils
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormRecoverPassword = ({ onSubmit, error, isFetching }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(validation),
  });

  return (
    <>
      <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500 mb-6">
        Ingresa tu dirección de correo y nosotros te enviaremos un enlace para
        que recuperes tu cuenta.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessage message={error && "Las credenciales son inválidas."} />
        <div className="flex flex-col gap-2">
          <Input
            label="Correo"
            name="email"
            control={control}
            placeholder="Ej: example@gmail.com"
          />
        </div>
        <div className="mt-8">
          <Button disabled={isFetching} variant="black" className="w-full">
            Enviar correo
          </Button>
        </div>
      </form>
    </>
  );
};

const validation = Yup.object().shape({
  email: Yup.string()
    .email("El correo es inválido")
    .required("El correo es obligatorio."),
});
