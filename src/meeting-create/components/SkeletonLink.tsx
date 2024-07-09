import { Box, Card, Skeleton } from "@mui/material";

export const SkeletonLink = () => {
  return (
    <Card
      style={{
        margin: "0px",
        marginTop: "2rem",
      }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Skeleton variant="text" sx={{ fontSize: "2rem", width: "80%" }} />
        <Skeleton variant="rounded" width={"2em"} height={"2em"} />
      </Box>
    </Card>
  );
};
