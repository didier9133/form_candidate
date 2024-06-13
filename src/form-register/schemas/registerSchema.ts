import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Este campo es obligatorio" }),
    lastname: z.string().trim().min(1, { message: "Este campo es obligatorio" }),
    mail: z.string().min(1, { message: "Este campo es obligatorio" }).email({ message: "El email no es válido" }),
    country: z
      .object({
        code: z.string(),
        label: z.string(),
        phone: z.string(),
      })
      .nullable(),
    profile: z.string().url({ message: "Debes colocar una URL valida" }).optional().or(z.literal("")),
    phone: z
      .string()
      .trim()
      .refine(
        phoneNumber => {
          return !isNaN(+phoneNumber);
        },
        { message: "El número de teléfono debe ser un valor numérico." }
      )
      .optional()
      .or(z.literal("")),
    proposalJob: z
      .object({
        value: z.string(),
        label: z.string(),
      })
      .nullable(),
    about: z.string().trim().min(1, { message: "Este campo es obligatorio" }),
    file_cv: z
      .custom<FileList>()
      .transform(val => {
        if (val instanceof File) return val;
        if (val instanceof FileList) return val[0];
        return null;
      })
      .refine(val => val instanceof File, { message: "Este campo es obligatorio" }),
  })
  .superRefine((val, ctx) => {
    if (val.country && !val.phone) {
      ctx.addIssue({
        message: "Este campo es obligatorio",
        path: ["phone"],
        code: z.ZodIssueCode.custom,
      });
    }
    if (!val.country && val.phone) {
      ctx.addIssue({
        message: "Este campo es obligatorio",
        path: ["country"],
        code: z.ZodIssueCode.custom,
      });
    }
    if (val.proposalJob === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["proposalJob"],
        message: "Este campo es obligatorio",
      });
    }
  });
