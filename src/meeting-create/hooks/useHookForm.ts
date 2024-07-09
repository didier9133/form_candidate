"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { IFormCreate } from "../interface";
import { createSchema } from "../schema";

const date = new Date();

export const useHookForm = () => {
  const { formState, control, resetField, register, watch, handleSubmit } = useForm<IFormCreate>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      whenStartMeeting: null,
      dateTimePicker: dayjs(date.setHours(date.getHours() + 1)) as Dayjs,
    },
    mode: "all",
  });

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "whenStartMeeting" && value.whenStartMeeting! === "now") {
        resetField("dateTimePicker");
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, resetField]);

  return {
    formState,
    control,
    register,
    watch,
    handleSubmit,
  };
};
