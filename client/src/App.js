import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { SnackbarProvider } from 'notistack';
import { CssBaseline, Box, Container } from '@mui/material';

import { createThemeByMode } from './container/Theme'; // Import theme creation
import { ThemeProvider } from '@mui/material/styles'; // Wrap app with theme provider

import HomePage from './components/HomePage';
import SearchPage from './components/SearchPerson';
import PersonList from './components/List';
import PersonDetail from './components/DetailsPerson';
import PersonAdd from './components/CreatePerson';
import PersonEdit from './components/UpdatePerson';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExportPage from './components/ExportPage';

const App = () => {
    const theme = createThemeByMode('noctis-lilac'); // Default to noctis-lilac

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Router>
                    <Box display="flex" flexDirection="column" minHeight="100vh">
                        <Navbar />
                        <Container component="main" flex="1" className="box-container">
                            <Routes>
                                <Route exact path="/" element={<HomePage />} />
                                <Route path="/list" element={<PatientList />} />
                                <Route path="/add" element={<PatientAdd />} />
                                <Route path="/edit/:id" element={<PatientEdit />} />
                                <Route path="/detail/:id" element={<PatientDetail />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/export" element={<ExportPage />} />
                                <Route path="*" element={<div>404 - Page Not Found</div>} />
                            </Routes>
                        </Container>
                        <Footer />
                    </Box>
                </Router>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default App;