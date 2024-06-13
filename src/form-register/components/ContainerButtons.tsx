import { Grid, Button } from "@mui/material";

export const ContainerButtons = () => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Button size="large" variant="outlined">
          Cancelar
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Button size="large" type="submit" variant="contained">
          Enviar
        </Button>
      </Grid>
    </>
  );
};
