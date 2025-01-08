import { Themeprovider, createTheme } from '@mui/material/styles';

// Define colors for the Nutrient Balance theme
const nutrientBalanceColors = {
    base: '#F5F5F5',  // Light beige background color (wholesome, natural feeling)
    surface: '#C8E6C9',  // Light green (calm, balanced)
    overlay: '#A5D6A7',  // Soft green overlay
    muted: '#666666',  // Muted text (dark gray)
    subtle: '#9E9E9E',  // Subtle secondary text (light gray)
    text: '#333333',  // Primary text color (dark gray for readability)
    primaryMain: '#4CAF50',  // Green for health, freshness (primary color)
    secondaryMain: '#FF9800',  // Orange for energy, vibrancy (secondary color)
    error: '#F44336',  // Red for errors
    warning: '#FFEB3B',  // Yellow for warning messages
    info: '#2196F3',  // Blue for informational messages
    success: '#81C784',  // Light green for success (goal achieved)
};

// Function to return the Nutrient Balance color palette
const getNutrientBalanceColors = (mode) => {
    switch (mode) {
        case 'nutrient-balance':
            return nutrientBalanceColors;
        default:
            return nutrientBalanceColors; // Default to Nutrient Balance if no match
    }
};

// Function to create a theme based on the selected mode
export const nutrientBalance = (mode = 'nutrient-balance') => {
    const nutrientBalanceColors = {
        base: '#F5F5F5',  // Light beige background
        surface: '#C8E6C9',  // Light green surface
        overlay: '#A5D6A7',  // Soft green overlay
        muted: '#666666',  // Muted text
        subtle: '#9E9E9E',  // Subtle secondary text
        text: '#333333',  // Primary text color
        primaryMain: '#4CAF50',  // Green primary (health, veggies)
        secondaryMain: '#FF9800',  // Orange secondary (fruits, energy)
        error: '#F44336',  // Error (red)
        warning: '#FFEB3B',  // Warning (yellow)
        info: '#2196F3',  // Info (blue)
        success: '#81C784',  // Success (light green)
    };

    return createTheme({
        palette: {
            mode: 'light',  // Light mode theme (can be dynamically set to dark if needed)
            background: {
                default: nutrientBalanceColors.base,
                paper: nutrientBalanceColors.surface,
            },
            primary: {
                main: nutrientBalanceColors.primaryMain,
            },
            secondary: {
                main: nutrientBalanceColors.secondaryMain,
            },
            error: {
                main: nutrientBalanceColors.error,
            },
            warning: {
                main: nutrientBalanceColors.warning,
            },
            info: {
                main: nutrientBalanceColors.info,
            },
            success: {
                main: nutrientBalanceColors.success,
            },
            text: {
                primary: nutrientBalanceColors.text,
                secondary: nutrientBalanceColors.muted,
            },
        },
        typography: {
            fontFamily: '"Roboto", "Arial", sans-serif',  // Choose a clean, easy-to-read font
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
                        backgroundColor: nutrientBalanceColors.primaryMain,
                        color: nutrientBalanceColors.text,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: '8px',  // Rounded corners for buttons
                    },
                    contained: {
                        backgroundColor: nutrientBalanceColors.primaryMain,
                        color: nutrientBalanceColors.text,
                        '&:hover': {
                            backgroundColor: nutrientBalanceColors.secondaryMain,  // Hover color for primary button
                        },
                    },
                    outlined: {
                        borderColor: nutrientBalanceColors.primaryMain,
                        color: nutrientBalanceColors.primaryMain,
                        '&:hover': {
                            borderColor: nutrientBalanceColors.secondaryMain,
                            color: nutrientBalanceColors.secondaryMain,
                        },
                    },
                    text: {
                        color: nutrientBalanceColors.primaryMain,
                        '&:hover': {
                            backgroundColor: nutrientBalanceColors.overlay,  // Hover effect
                        },
                    },
                },
            },
        },
    });
};
