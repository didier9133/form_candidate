"use client";

import { Autocomplete, SxProps, TextField, Theme, Typography } from "@mui/material";
import { FieldError, Merge, FieldErrorsImpl, Controller, Control } from "react-hook-form";
import { ElementRenderOptionCountry } from ".";
import { DefaultValuesCountry, IUseHookFormRegister, NameTypes } from "../interfaces";

type IAutocompleteMaterial = {
  name: NameTypes;
  options: DefaultValuesCountry[];
  sx?: SxProps<Theme> | undefined;
  error: boolean;
  errorText: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  label: string;
  placeholder?: string;
  control: Control<IUseHookFormRegister>;
};

export const AutocompleteComponentCountry = ({
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
            test-id="autocomplete-country"
            {...field}
            onChange={(_e, data) => {
              field.onChange(data);
            }}
            isOptionEqualToValue={(option, value) => {
              return option.code === value.code;
            }}
            value={field.value as unknown as DefaultValuesCountry | null}
            noOptionsText="No hay opciones disponibles"
            forcePopupIcon
            sx={sx}
            clearOnBlur
            autoHighlight
            options={options}
            renderOption={(props, option) => {
              return (
                <ElementRenderOptionCountry key={props.id} props={props} option={option as DefaultValuesCountry} />
              );
            }}
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
