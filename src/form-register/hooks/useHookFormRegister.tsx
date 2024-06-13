"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas";
import { useEffect, useState } from "react";
import { DefaultValuesCountry, IUseHookFormRegister } from "../interfaces";

interface IUseHookFormRegisterProps {
  defaultValue: DefaultValuesCountry | null;
}

export const useHookFormRegister = ({ defaultValue }: IUseHookFormRegisterProps) => {
  const [codeCountrySelected, setCodeCountrySelected] = useState<string | undefined>();
  const { resetField, handleSubmit, register, watch, control, formState } = useForm<IUseHookFormRegister>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      proposalJob: null,
      country: defaultValue,
      phone: "",
      name: "",
      lastname: "",
      mail: "",
      file_cv: "",
      profile: "",
      about: "",
    },
    mode: "all",
  });
  const { errors } = formState;

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "country") {
        setCodeCountrySelected(value.country?.phone);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return { resetField, handleSubmit, register, control, errors, codeCountrySelected };
};
