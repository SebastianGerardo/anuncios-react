// components
import { Button, Input } from "@/components";
import { ErrorMessage } from "@/components/general/ErrorMessage";
// hooks
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAsyncStates } from "@/hooks/general/useAsyncStates";
// utils
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// apis
import { createPassword } from "@/apis/auth";

export const FormNewPassword = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
    resolver: yupResolver(schema),
  });
  const { token } = useParams();
  const { isLoading, setIsLoading, error, setError } = useAsyncStates();

  const onSubmit = (values) => {
    setIsLoading(true);
    setError(null);
    createPassword(values, token)
      .then(({ message }) => {
        if (message === "PASSWORD_CREATED") {
          navigate("/auth/sign_in");
        }
      })
      .catch(({ response: { data } }) => setError(data))
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <ErrorMessage message={error && "Las credenciales son inválidas"} />
      <Input
        label="Nueva contraseña"
        name="password"
        type="password"
        control={control}
      />
      <Input
        label="Confirmar contraseña"
        name="passwordConfirmation"
        type="password"
        control={control}
      />
      <Button disabled={isLoading} variant="black" className="w-full mt-2">
        Cambiar contraseña
      </Button>
    </form>
  );
};

const schema = Yup.object().shape({
  password: Yup.string().required("Este campo es obligatorio."),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Las contraseñas deben coincidir.")
    .required("Este campo es obligatorio."),
});
