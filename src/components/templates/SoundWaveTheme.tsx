import { createTheme, BreakpointOverrides } from "@mui/material";
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/500.css'

declare module '@mui/core/styles/createBreakpoints' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true;
        desktop: true;
    }
}

export const SoundWaveTheme = createTheme({
    palette: {
        primary: {
            main: '#2F303A'
        },
        background: {
            default: '#2F303A'
        },
        text: {
            primary: '#fff',
        }
    },
    typography: {
        fontFamily: ['Poppins'],
        heroText: {
            fontSize: '2rem',
            fontWeight: 500
        },
        joinTitle: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: '3.5rem'
        },
        accentText: {
            fontFamily: ['Poppins'],
            color: '#bf3681'
        },
        inputLabel: {
            fontFamily: ['Poppins'],
            fontSize: '0.75rem',
            fontWeight: 700
        },
        footerText: {
            fontFamily: ['Poppins'],
            fontWeight: 700,
            fontSize: '0.85rem',
            color: '#fff'
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            desktop: 750
        }
    }
})