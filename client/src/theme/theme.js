// src/container/Theme.js
import { createTheme } from '@mui/material/styles';

// Define colors for Noctis Lilac theme
const noctisLilacColors = {
    base: '#2d2a55', // Background base
    surface: '#3b3758', // Card and container background
    overlay: '#4c3c72', // Overlay elements
    muted: '#b3b1c4', // Muted text
    subtle: '#726e97', // Subtle secondary text
    text: '#f8f8f2', // Primary text color
    primaryMain: '#c792ea', // Purple primary color
    secondaryMain: '#82aaff', // Blue secondary color
    error: '#ff5370', // Red for errors
    warning: '#ffcb6b', // Yellow for warnings
    info: '#89ddff', // Light blue for info
    success: '#c3e88d', // Light green for success
};

// Function to return the Noctis Lilac palette
const getNoctisColors = (mode) => {
    switch (mode) {
        case 'noctis-lilac':
            return noctisLilacColors;
        default:
            return noctisLilacColors; // Default to Noctis Lilac if no match
    }
};

// Function to create a theme based on the selected mode
export const createThemeByMode = (mode) => {
    const themeColors = getNoctisColors(mode);

    return createTheme({
        palette: {
            mode: 'dark',
            background: {
                default: themeColors.base,
                paper: themeColors.surface,
            },
            primary: {
                main: themeColors.primaryMain,
            },
            secondary: {
                main: themeColors.secondaryMain,
            },
            error: {
                main: themeColors.error,
            },
            warning: {
                main: themeColors.warning,
            },
            info: {
                main: themeColors.info,
            },
            success: {
                main: themeColors.success,
            },
            text: {
                primary: themeColors.text,
                secondary: themeColors.muted,
            },
        },
        typography: {
            fontFamily: '"Fira Code", "Roboto Mono", monospace',
            h1: { fontWeight: 600, fontSize: '2.5rem' },
            h2: { fontWeight: 500, fontSize: '2rem' },
            h3: { fontWeight: 500, fontSize: '1.75rem' },
            h4: { fontWeight: 500, fontSize: '1.5rem' },
            h5: { fontWeight: 400, fontSize: '1.25rem' },
            h6: { fontWeight: 400, fontSize: '1rem' },
            body1: { fontWeight: 400, fontSize: '1rem' },
            body2: { fontWeight: 400, fontSize: '0.875rem' },
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: themeColors.primaryMain,
                        color: themeColors.text,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: '8px',
                    },
                    contained: {
                        backgroundColor: themeColors.primaryMain,
                        color: themeColors.text,
                        '&:hover': {
                            backgroundColor: themeColors.secondaryMain,
                        },
                    },
                    outlined: {
                        borderColor: themeColors.primaryMain,
                        color: themeColors.primaryMain,
                        '&:hover': {
                            borderColor: themeColors.secondaryMain,
                            color: themeColors.secondaryMain,
                        },
                    },
                    text: {
                        color: themeColors.primaryMain,
                        '&:hover': {
                            backgroundColor: themeColors.overlay,
                        },
                    },
                },
            },
        },
    });
};