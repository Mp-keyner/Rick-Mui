import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Crear un tema base
const theme = createTheme({
  palette: {
    primary: {
      main: "#46b8d3",
      contrastText: "#fff",
      text: "#fff",
    },
    secondary: {
      main: "#232323", // Color principal
      contrastText: "#fff",
    },
    error: {
      main: "#f44336", // Color de error
    },
    warning: {
      main: "#ff9800", // Color de advertencia
    },
    info: {
      main: "#2196f3", // Color de información
    },
    success: {
      main: "#4caf50", // Color de éxito
    },
  },
  typography: {
    fontFamily: '"League Spartan", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.2rem",
      lineHeight: 1,
      textDecoration: "none",
    },
    textDecoration: "none",
    // ... otras configuraciones tipográficas
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        // Estilos para la variante "root"
        root: {
          textDecoration :'none',
          textTransform: "none", // No transformar texto
          boxShadow: "none",
        },
        contained: {
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Estilos para la variante "root"
        root: {
          fontSize: "1rem",
          borderRadius: "4px", // Redondear bordes
          textTransform: "none", // No transformar texto
          boxShadow: "none",
          // ... otros estilos globales para todos los botones
        },
        contained: {
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "1rem", // Estilo personalizado para todos los inputs
        },
      },
    },
    // ... otras sobrescrituras de estilo por componente
  },
});

// Aplicar responsiveFontSizes para ajustar el tamaño de la fuente de forma dinámica
const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
