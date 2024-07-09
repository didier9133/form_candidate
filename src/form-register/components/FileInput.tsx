import { Typography, InputAdornment, SxProps, Theme, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FieldError, FieldErrorsImpl, Merge, UseFormRegister } from "react-hook-form";
import { useFile } from "../hooks";
import { IUseHookFormRegister } from "../interfaces";

interface InputFileProps {
  register: UseFormRegister<IUseHookFormRegister>;
  name: string;
  label: string;
  error: boolean;
  errorMessage: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  sx?: SxProps<Theme> | undefined;
  placeholder: string;
  inputProps: string | undefined;
}

export const FileInput = ({
  register,
  label,
  inputProps,
  sx,
  placeholder,
  name,
  error,
  errorMessage,
}: InputFileProps) => {
  const { fileValue: file, handleChangeFile } = useFile();
  const idHardcoded = name;
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <>
            <InputAdornment position="start">
              <CloudUploadIcon color="secondary" />
            </InputAdornment>

            <InputAdornment sx={{ justifyContent: "flex-start" }} position="end">
              <Typography
                sx={{ width: "auto" }}
                id="labelInputFile"
                htmlFor={idHardcoded}
                variant="body1"
                component="label">
                {file?.name ? file.name.split(".")[0] : placeholder}
              </Typography>

              <Typography
                sx={{ display: `${!file && "none"}` }}
                id="labelInputFile"
                htmlFor={idHardcoded}
                variant="body1"
                component="label">
                {file?.name && `.${file.name.split(".")[1]}`}
              </Typography>
            </InputAdornment>
          </>
        ),
      }}
      InputLabelProps={{ shrink: true }}
      type="file"
      error={error}
      helperText={
        errorMessage && (
          <Typography variant="caption" color="error">
            {`${errorMessage}`}
          </Typography>
        )
      }
      sx={sx}
      label={label}
      variant="outlined"
      autoComplete="off"
      {...register(name as "file_cv")}
      inputProps={{
        onChange: handleChangeFile,
        accept: inputProps,
        style: { display: "none", width: "0px" },
        id: idHardcoded,
      }}
    />
  );
};
