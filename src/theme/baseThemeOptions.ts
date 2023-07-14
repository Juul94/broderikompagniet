import { createTheme } from '@mui/material/styles';
import './customThemeOptions';

declare module '@mui/material/styles' {
    interface DefaultTheme {
        spacing: (value: number) => string;
    }
}

const theme = createTheme({
    spacing: (factor: number) => `${8 * factor}px`,
    breakpoints: {
        values: {
            xs: 300,
            sm: 600,
            md: 1024,
            lg: 1300,
            ml: 1700,
            xl: 1920,
        },
    },
    palette: {
        primary: {
            main: '#00A8E8',
            light: '#66D1FF',
            dark: '#00779F',
        },
        secondary: {
            main: '#FF7600',
            light: '#FFA733',
            dark: '#CC5A00',
        },
        background: {
            default: '#f3f3f4',
            light: '#E5E7EB',
            dark: '#D1D5DB',
        },
        success: {
            main: '#14B8A6',
            light: '#43C6B7',
            dark: '#0E8074',
        },
        error: {
            main: '#D14343',
            light: '#DA6868',
            dark: '#922E2E',
        },
        warning: {
            main: '#FFB020',
            light: '#FFBF4C',
            dark: '#B27B16',
        },
        info: {
            main: '#2196F3',
            light: '#64B6F7',
            dark: '#0B79D0',
        },
        text: {
            primary: '#111827',
            secondary: '#6B7280',
            disabled: 'rgba(17, 24, 39, 0.48)',
        },
    },
});

export default theme;
