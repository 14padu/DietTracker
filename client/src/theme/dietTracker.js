// src/theme/dietTrackerTheme.js
import { createTheme } from '@mui/material/styles';

// New color palette inspired by healthy and fresh tones
const dietTrackerColors = {
  base: '#2d3e50', // Darker blue-gray background
  surface: '#34495e', // Lighter gray for paper-like components
  highlight: '#27ae60', // Fresh green for success/positive actions (e.g., successful meal logs)
  warning: '#f39c12', // Yellow for warnings like calorie excess
  error: '#e74c3c', // Red for errors
  primary: '#1abc9c', // Cool teal as the main primary color
  secondary: '#e67e22', // A vibrant orange for secondary actions
  textPrimary: '#ecf0f1', // Light text color for readability
  textSecondary: '#95a5a6', // Subtle text color for less important text
  backgroundLight: '#ecf0f1', // Light background for sections
  backgroundDark: '#2c3e50', // Darker background for main page
};

// Creating the theme
const dietTrackerTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: dietTrackerColors.base,
      paper: dietTrackerColors.surface,
    },
    primary: {
      main: dietTrackerColors.primary,
    },
    secondary: {
      main: dietTrackerColors.secondary,
    },
    success: {
      main: dietTrackerColors.highlight,
    },
    warning: {
      main: dietTrackerColors.warning,
    },
    error: {
      main: dietTrackerColors.error,
    },
    text: {
      primary: dietTrackerColors.textPrimary,
      secondary: dietTrackerColors.textSecondary,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Clean font for readability
    h1: {
      fontFamily: '"Space Mono", monospace', // Monospace for headings
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Mono", monospace',
    },
    h3: {
      fontFamily: '"Space Mono", monospace',
    },
    h4: {
      fontFamily: '"Space Mono", monospace',
    },
    h5: {
      fontFamily: '"Space Mono", monospace',
    },
    h6: {
      fontFamily: '"Space Mono", monospace',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: dietTrackerColors.surface, // Light surface color for app bar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px', // Rounded button edges
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px 0',
          backgroundColor: dietTrackerColors.backgroundLight, // Light background for text fields
          borderRadius: '4px', // Rounded text fields for a friendly look
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Space+Mono:wght@400;700&display=swap');
      `,
    },
  },
});

export default dietTrackerTheme;
