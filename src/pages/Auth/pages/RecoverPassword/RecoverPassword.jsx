// components
import { FormRecoverPassword } from "@/pages/Auth/components/FormRecoverPassword";
import { SuccessMessage } from "@/pages/Auth/components/SuccessMessage";
import { ReturnToHome } from "@/pages/Auth/components/ReturnToHome";
// hooks
import { useRecoverPassword } from "@/hooks/auth/useRecoverPassword";

export function RecoverPassword() {
  const { error, isFetching, onSubmit, isSubmit } = useRecoverPassword();

  return (
    <>
      <ReturnToHome />
      {isSubmit ? (
        <SuccessMessage
          message="¡Correo enviado!"
          subMessage="Revisa el correo que te hemos enviado y completa los pasos."
        />
      ) : (
        <FormRecoverPassword
          onSubmit={onSubmit}
          error={error}
          isFetching={isFetching}
        />
      )}
    </>
  );
}
