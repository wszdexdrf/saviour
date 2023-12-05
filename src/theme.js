// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#E95420', 
        },
        secondary: {
            main: '#77216F',
        },
        background: {
            default: '#6c757d',
        },
        foreground: {
            default: '#ffffff',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#E95420',
                    backgroundImage: 'linear-gradient(to right bottom, #E95420 0%, #77216F 100%)',
                    borderRadius: 16
                },
            },
        },
    },
});

export default theme;