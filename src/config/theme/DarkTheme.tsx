import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#232323",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#de3000",
            contrastText: "#ffffff",
        },
        background: {
            default: "#9f9f9f",
            paper: "#1d1d1d",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b0b0b0",
            disabled: "#757575",
        },
        action: {
            active: "#ffffff",
            hover: "rgba(255, 255, 255, 0.08)",
        },
        error: {
            main: "#f44336",
        },
        warning: {
            main: "#ffa726",
        },
        info: {
            main: "#29b6f6",
        },
        success: {
            main: "#66bb6a",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        button: { textTransform: "none" },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    padding: "10px 20px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        backgroundColor: "#6b1a1a",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#1d1d1d",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                },
            },
        },
    },
});
