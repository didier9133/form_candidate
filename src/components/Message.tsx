import { Box, Typography } from "@mui/material";

interface IMessageProps {
  title: string;
  body: string;
  name: string;
  image: JSX.Element;
}

export const Message = ({ title, body, name, image }: IMessageProps) => {
  return (
    <>
      <Box component="div" sx={{ display: "flex", flexDirection: "column", maxWidth: "40rem" }}>
        <Typography sx={{ marginBottom: "10px" }} variant="h4">
          {title} {name}!
        </Typography>
        <Typography variant="h5">{body}</Typography>
      </Box>
      {image}
    </>
  );
};
