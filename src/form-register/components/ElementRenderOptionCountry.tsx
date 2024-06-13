import { Box } from "@mui/material";
import { HTMLAttributes } from "react";
import { DefaultValuesCountry } from "../interfaces";

interface ElementRenderOptionInterface {
  props: HTMLAttributes<HTMLLIElement>;
  option: DefaultValuesCountry;
}

export const ElementRenderOptionCountry = ({ props, option }: ElementRenderOptionInterface) => {
  let rest = props;
  if ("key" in props) {
    const { key, ...otherProps } = props;
    rest = otherProps;
  }
  return (
    <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...rest}>
      <img
        loading="lazy"
        width="20"
        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
        alt=""
      />
      {option.label} ({option.code}) +{option.phone}
    </Box>
  );
};
