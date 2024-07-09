import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Control, Controller } from "react-hook-form";
import { IFormCreate } from "../interface";

type NamesFormCreate = "dateTimePicker";

interface ISelectTimeDayProps {
  name: NamesFormCreate;
  control: Control<IFormCreate, any>;
  format: string;
  errorMessage: string | undefined;
  isDisablePast?: boolean;
  label: string;
}

export const SelectTimeDay = ({
  name,
  control,
  format,
  errorMessage,
  label,
  isDisablePast = false,
}: ISelectTimeDayProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <DateTimePicker
                slotProps={{
                  textField: {
                    helperText: errorMessage || "",
                  },
                }}
                format={format}
                {...field}
                disablePast={isDisablePast}
                label={label}
              />
            );
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
