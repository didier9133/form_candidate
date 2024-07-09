import { FormControl, FormLabel, RadioGroup, FormControlLabel } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { IFormCreate } from "../interface";

type NamesFormCreate = "whenStartMeeting";

interface BuilderFormCreate {
  value: string;
  label: string;
  component: JSX.Element;
}

interface IOptionComponentProps {
  register: UseFormRegister<IFormCreate>;
  builder: BuilderFormCreate[];
  name: NamesFormCreate;
  defaultValue: string;
  title: string;
}

export const RadioOptionComponent = ({ register, builder, name, defaultValue, title }: IOptionComponentProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{title}</FormLabel>
      <RadioGroup defaultValue={defaultValue}>
        {builder.map(item => (
          <FormControlLabel
            key={item.value}
            control={item.component}
            value={item.value}
            label={item.label}
            {...register(name)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
