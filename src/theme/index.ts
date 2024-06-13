import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006AFF",
    },
    secondary: {
      main: "#3781ff",
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "inherit",
    h1: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      textAlign: "center",
      fontSize: "1.5rem",
      fontWeight: 400,
      "@media (min-width:600px)": {
        fontSize: "2.9rem",
      },
    },
    h3: {
      textAlign: "center",
      fontSize: "1rem",
      fontWeight: 300,
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      textAlign: "center",
      fontSize: "1rem",
      fontWeight: 300,
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      textAlign: "center",
      fontSize: "0.8rem",
      fontWeight: 300,
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    body1: {
      width: "100%",
      fontWeight: "400",
      lineHeight: "1.4375em",
    },
  },
  components: {
    MuiInputAdornment: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.position === "end" && {
            alignItems: "center",
            width: "100%",
            margin: "16.5px 14px",
            height: "23px",
          }),
        }),
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "body1" &&
            ownerState.id === "labelInputFile" && {
              color: "#3e8ea2",
              cursor: "pointer",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              maxWidth: "200px",
            }),
        }),
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(!ownerState.multiline && {
            "& .MuiInputBase-input": {
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            },
          }),
          "& .MuiFileInput-placeholder": {
            fontSize: "0.9rem",
          },
        }),
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.9rem",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          padding: "1rem",
          borderRadius: "20px",
          backgroundColor: "#fff",
          "@media (min-width:600px)": {
            padding: "2rem",
            margin: "2rem",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.label === "Sube tu resumen/CV *" && {
            "& .MuiInputBase-root": {
              "& fieldset": {
                borderStyle: "dashed",
              },
            },
          }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontSize: "0.8rem",
          width: "100%",
          margin: "0 auto",
          marginTop: 1,
          marginBottom: 2,
          "@media (min-width:600px)": {
            fontSize: "0.9rem",
          },
        }),
      },
    },
  },
});

export default theme;
