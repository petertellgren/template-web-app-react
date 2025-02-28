import type { ReactElement } from "react";
import { usePostSelfRegisterByData } from "core-api";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useToastNotifier } from "shared-ui";
import { useDocumentTitle } from "usehooks-ts";
import type { FormSignUp } from "~/components/forms/sign-up/SignUpForm";
import { SignUpView } from "~/components/views/sign-up/SignUpView";
import { useAppInfo } from "~/core/config/UseAppInfo";

export function SignUpPage(): ReactElement {
  useDocumentTitle("Sign Up");
  const navigate = useNavigate();
  const intl = useIntl();
  const { appNameCapital } = useAppInfo();
  const { isPending, mutateAsync: submit } = usePostSelfRegisterByData();
  const { addAlert, reset } = useToastNotifier();

  async function handleSubmit(data: FormSignUp): Promise<void> {
    reset();
    try {
      await submit(data);
      navigate("/");
    } catch (error) {
      addAlert({
        id: "sign-up-error",
        title: intl.formatMessage({
          description: "SignUpPage - Sign up error alert title",
          defaultMessage: "Something went wrong",
          id: "CrlHXH",
        }),
        text: intl.formatMessage({
          description: "SignUpPage - Sign up error alert text",
          defaultMessage: "Please verify the submitted information and try again.",
          id: "N89CNO",
        }),
        severity: "error",
      });
    }
  }

  return (
    <SignUpView
      appName={appNameCapital}
      signUpForm={{
        loading: isPending,
        onSubmit: handleSubmit,
      }}
    />
  );
}
