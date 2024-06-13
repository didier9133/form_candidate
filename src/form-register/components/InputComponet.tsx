import { InputAdornment, TextField, Typography } from "@mui/material";
import { InputMaterialProps } from "../interfaces";

export const InputComponent = ({
  register,
  name,
  error,
  label,
  errorText,
  sx,
  placeholder,
  valuePrefix,
  multiline,
  rows,
}: InputMaterialProps) => {
  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      multiline={multiline}
      rows={rows}
      InputProps={
        valuePrefix
          ? {
              startAdornment: <InputAdornment position="start">{`(+${valuePrefix})`}</InputAdornment>,
            }
          : {}
      }
      error={error}
      helperText={
        errorText && (
          <Typography variant="caption" color="error">
            {`${errorText}`}
          </Typography>
        )
      }
      placeholder={placeholder}
      sx={sx}
      label={label}
      variant="outlined"
      autoComplete="off"
      {...register(name)}
    />
  );
};
