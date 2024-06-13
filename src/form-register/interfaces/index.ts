import { SxProps, Theme } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

export interface InputInterfaceProps {
  name: string;
  label: string;
  sx?: SxProps<Theme> | undefined;
  placeholder?: string;
  options?: string;
  type?: string;
  inputProps?: string;
  valuePrefix?: string;
  multiline?: boolean;
  rows?: number;
}

export type NameTypes = "name" | "lastname" | "mail" | "phone" | "about";

export interface InputMaterialProps {
  register: UseFormRegister<IUseHookFormRegister>;
  name: NameTypes;
  label: string;
  error: boolean;
  errorText: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  sx?: SxProps<Theme> | undefined;
  placeholder?: string;
  valuePrefix?: string;
  multiline?: boolean;
  rows?: number;
}

export interface OptionsCountriesInterface {
  code?: string;
  label?: string;
  phone?: string;
  suggested?: undefined | boolean;
  value?: string | undefined;
}

export interface OptionsProposalJob {
  value?: string;
  label?: string;
  phone?: string | undefined;
}

interface InterfaceCountryConfiguration {
  options: OptionsCountriesInterface[] | OptionsProposalJob[];
}

interface InterfaceProposalConfiguration {
  options: OptionsProposalJob[];
}

export interface IObjConfigurationAutocomplete {
  [key: string]: InterfaceCountryConfiguration;
}

export interface IObjConfigurationAutocompleteProposal {
  [key: string]: InterfaceProposalConfiguration;
}

export type IUseHookFormRegister = {
  [x: string]: any;
  proposalJob: null | OptionsProposalJob;
  country: null | DefaultValuesCountry;
  phone: string;
  name: string;
  lastname: string;
  mail: string;
  file_cv: File | string;
  profile: string;
  about: string;
};

export interface DefaultValuesCountry {
  code: string;
  label: string;
  phone: string;
}
