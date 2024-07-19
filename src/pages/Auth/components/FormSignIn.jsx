// components
import { Link } from "react-router-dom";
import { Button, Input } from "@/components";
import { ErrorMessage } from "@/components/general/ErrorMessage";
// hooks
import { useForm } from "react-hook-form";
import { useLoginAccount } from "@/hooks/auth/useLoginAccount";
// utils
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const FormSignIn = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validation),
  });

  const { error, isLoading, onSubmit } = useLoginAccount();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ErrorMessage message={error && "Las credenciales son inválidas."} />
      <div className="flex flex-col gap-2">
        <Input
          label="Correo"
          name="email"
          control={control}
          placeholder="Ej: example@gmail.com"
        />
        <Input
          label="Contraseña"
          name="password"
          control={control}
          type="password"
          placeholder="Ej: *********"
        />
        <div className="flex justify-end items-center">
          <Link
            to="/auth/recover_password"
            className="text-xs text-gray-400 text-right"
          >
            ¿Has olvidado tu contraseña?
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <Button disabled={isLoading} variant="black" className="w-full">
          Iniciar sesión
        </Button>
      </div>
    </form>
  );
};

const validation = Yup.object().shape({
  email: Yup.string()
    .email("El correo es inválido")
    .required("El correo es obligatorio."),
  password: Yup.string().required("La contraseña es obligatoria."),
});
