import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import { Alert, Collapse, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

export interface IFormResetPassword {
  email: string;
}

export interface ResetPasswordFormProps {
  error: string;
  open: boolean;
  loading: boolean;
  onAlert: () => void;
  onSubmit: SubmitHandler<IFormResetPassword>;
}

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Email is required"),
  })
  .required();

const ResetPasswordForm = ({ error, open, loading, onAlert, onSubmit }: ResetPasswordFormProps) => {
  const {
    handleSubmit: handleFormSubmit,
    register,
    formState: { errors },
  } = useForm<IFormResetPassword>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleFormSubmit(onSubmit)}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        autoComplete="email"
        autoFocus
        error={!!errors?.email}
        helperText={errors?.email?.message}
        {...register("email")}
      />
      <LoadingButton type="submit" fullWidth loading={loading} variant="contained" sx={{ mt: 3, mb: 2 }}>
        Send
      </LoadingButton>
      <Collapse in={open && !!error}>
        <Alert
          severity="error"
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={onAlert}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {error}
        </Alert>
      </Collapse>
    </form>
  );
};

export default ResetPasswordForm;
