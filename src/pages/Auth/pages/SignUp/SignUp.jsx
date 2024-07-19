// components
import { FormSignUp } from "@/pages/Auth/components/FormSignUp";
import { ReturnToHome } from "@/pages/Auth/components/ReturnToHome";
import { SuccessMessage } from "@/pages/Auth/components/SuccessMessage";
// hooks
import { useCreateAccount } from "@/hooks/auth/useCreateAccount";

export const SignUp = () => {
  const { isSubmit, error, isFetching, onSubmit } = useCreateAccount();

  return (
    <>
      <ReturnToHome />
      {isSubmit ? (
        <SuccessMessage
          message="¡Gracias por unirte!"
          subMessage=" Completa tu registro con el enlace de confirmación que hemos enviado a
          tu email."
        />
      ) : (
        <FormSignUp onSubmit={onSubmit} error={error} isFetching={isFetching} />
      )}
    </>
  );
};
