"use client";

import { Autocomplete, SxProps, TextField, Theme, Typography } from "@mui/material";
import { FieldError, Merge, FieldErrorsImpl, Controller, Control } from "react-hook-form";
import { IUseHookFormRegister, NameTypes, OptionsProposalJob } from "../interfaces";

type IAutocompleteMaterial = {
  name: NameTypes;
  options: OptionsProposalJob[];
  sx?: SxProps<Theme> | undefined;
  error: boolean;
  errorText: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  label: string;
  placeholder?: string;
  control: Control<IUseHookFormRegister>;
};

export const AutocompleteComponent = ({
  sx,
  options,
  name,
  error,
  errorText,
  label,
  placeholder,
  control,
}: IAutocompleteMaterial) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Autocomplete
            {...field}
            onChange={(_e, data) => {
              field.onChange(data);
            }}
            isOptionEqualToValue={(option, value) => {
              return option.value === value.value;
            }}
            value={field.value as unknown as OptionsProposalJob | null}
            noOptionsText="No hay opciones disponibles"
            forcePopupIcon
            sx={sx}
            clearOnBlur
            autoHighlight
            options={options}
            renderInput={params => {
              return (
                <TextField
                  {...params}
                  placeholder={placeholder}
                  label={label}
                  variant="outlined"
                  error={error}
                  helperText={
                    errorText && (
                      <Typography variant="caption" color="error">
                        {errorText.toString()}
                      </Typography>
                    )
                  }
                />
              );
            }}
          />
        );
      }}
    />
  );
};
