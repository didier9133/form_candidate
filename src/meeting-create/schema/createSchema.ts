import dayjs from "dayjs";
import { z } from "zod";

export const createSchema = z
  .object({
    whenStartMeeting: z.string().min(1, { message: "Seleccione un valor" }),
    dateTimePicker: z.coerce.date(),
  })
  .superRefine((val, ctx) => {
    if (val.whenStartMeeting === "later" && dayjs(val.dateTimePicker) < dayjs(new Date())) {
      ctx.addIssue({
        message: "No se puede seleccionar una fecha/tiempo pasada",
        path: ["dateTimePicker"],
        code: z.ZodIssueCode.custom,
      });
    }
  });
