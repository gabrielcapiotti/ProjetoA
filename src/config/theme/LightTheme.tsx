import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#cd7227',
            contrastText: '#000000',
        },
        secondary: {
            main: '#595959',
            contrastText: '#000000',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#000000',
            secondary: '#575757',
            disabled: '#9e9e9e',
        },
        action: {
            hover: 'rgba(0, 0, 0, 0.08)',
            selected: 'rgba(0, 0, 0, 0.16)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
        },
        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ffa726',
        },
        info: {
            main: '#29b6f6',
        },
        success: {
            main: '#66bb6a',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        button: { textTransform: 'none' },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#1565c0', // Azul mais escuro no hover
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                },
            },
        },
    },
});
