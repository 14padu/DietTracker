import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';           
import { nutrientBalance } from './theme/nutrientBalance'; // Import theme creation // Wrap app with theme provider

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CreatePerson from './components/CreatePerson';
import ShowPersonList from './components/ShowPersonList';
import ShowPersonDetails from './components/ShowPersonDetails';
import UpdatePersonInfo from './components/UpdatePersonInfo';
import HomePage from './components/HomePage';
import ExportPerson from './components/ExportPerson';  // Corrected import name
import SearchPerson from './components/SearchPerson';  // Ensure SearchPerson is imported

const App = () => {
  return (
    <ThemeProvider theme={nutrientBalance}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />
          <Box component="main" flexGrow={1} py={3}>
            <div className="box-container">
              <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route path='/person-add' element={<CreatePerson />} />
                <Route path='/person-list' element={<ShowPersonList />} />
                <Route path='/edit-person/:id' element={<UpdatePersonInfo />} />
                <Route path='/show-person/:id' element={<ShowPersonDetails />} />
                <Route path='/person-export' element={<ExportPerson />} />  {/* Fixed name here */}
                <Route path='/search-person' element={<SearchPerson />} />  {/* Added SearchPerson route */}
              </Routes>
            </div>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
