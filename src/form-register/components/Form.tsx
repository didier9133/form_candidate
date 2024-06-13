"use client";

import { Box, Grid } from "@mui/material";
import { AutocompleteComponent, AutocompleteComponentCountry, ContainerButtons, InputComponent } from ".";
import { useHookFormRegister } from "../hooks";
import {
  DefaultValuesCountry,
  IObjConfigurationAutocomplete,
  IObjConfigurationAutocompleteProposal,
  IUseHookFormRegister,
  NameTypes,
} from "../interfaces";
import { formHelpers } from "../helpers";
import { FileInput } from "./FileInput";
import { redirect } from "next/navigation";

interface IFormProps {
  defaultValue: DefaultValuesCountry | null;
  objConfigurationAutocomplete: IObjConfigurationAutocomplete | IObjConfigurationAutocompleteProposal;
}

const sxStyleForm = { display: "flex", flexDirection: "column", justifyContent: "center" };

export const Form = ({ defaultValue, objConfigurationAutocomplete }: IFormProps) => {
  const { buildPayloadToSendForm, getConfigInputs } = formHelpers;
  const { handleSubmit, register, control, errors, codeCountrySelected } = useHookFormRegister({ defaultValue });

  const onSubmit = (data: IUseHookFormRegister) => {
    const payload = buildPayloadToSendForm({
      data,
    });
    console.log({ payload });

    redirect("/success/123");
  };
  const configInputs = getConfigInputs({ valuePrefix: codeCountrySelected });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={sxStyleForm}>
      <Grid container spacing={2}>
        {configInputs.map(input => {
          if (input.hasOwnProperty("type")) {
            return (
              <Grid item xs={12} md={6} key={input.name}>
                <FileInput
                  {...input}
                  inputProps={input.inputProps}
                  errorMessage={
                    errors[input.name as keyof IUseHookFormRegister]?.message
                      ? errors[input.name as keyof IUseHookFormRegister]?.message
                      : ""
                  }
                  register={register}
                  error={Boolean(errors[input.name as keyof IUseHookFormRegister])}
                  placeholder={input.placeholder ?? ""}
                />
              </Grid>
            );
          }
          if (input.name === "proposalJob") {
            return (
              <Grid item xs={12} md={6} key={input.name}>
                <AutocompleteComponent
                  placeholder={input.placeholder}
                  sx={input.sx}
                  label={input.label}
                  errorText={errors[input.name]?.message ? errors[input.name]?.message : ""}
                  error={Boolean(errors[input.name])}
                  name={input.name}
                  key={input.name}
                  options={objConfigurationAutocomplete[input.name].options}
                  control={control}
                />
              </Grid>
            );
          }
          if (input.name === "country") {
            return (
              <Grid item xs={12} md={6} key={input.name}>
                <AutocompleteComponentCountry
                  placeholder={input.placeholder}
                  sx={input.sx}
                  label={input.label}
                  errorText={errors[input.name]?.message ? errors[input.name]?.message : ""}
                  error={Boolean(errors[input.name])}
                  name={input.name}
                  key={input.name}
                  options={objConfigurationAutocomplete[input.name].options as DefaultValuesCountry[]}
                  control={control}
                />
              </Grid>
            );
          }

          return (
            <Grid item xs={12} md={input.multiline ? 12 : 6} key={input.name}>
              <InputComponent
                key={input.name}
                {...input}
                name={input.name as NameTypes}
                register={register}
                error={Boolean(errors[input.name as keyof IUseHookFormRegister])}
                errorText={
                  errors[input.name as keyof IUseHookFormRegister]?.message
                    ? errors[input.name as keyof IUseHookFormRegister]?.message
                    : ""
                }
                valuePrefix={input.valuePrefix}
              />
            </Grid>
          );
        })}
        <ContainerButtons />
      </Grid>
    </Box>
  );
};
