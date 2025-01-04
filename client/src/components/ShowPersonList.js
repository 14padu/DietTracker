import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';

import PersonCard from './PersonCard';

function ShowPersonList() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get('https://diet-track-5chn.onrender.com/api/diets')
      .then((res) => {
        setPersons(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log('Error from ShowPersonList ->', err);
        setLoading(false); // Set loading to false even on error
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Title Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h3" component="h1" color="secondary" fontWeight="bold">
          Persons List
        </Typography>
        <Button
          component={Link}
          to="/person-add"
          variant="contained"
          sx={{
            backgroundColor: '#FF4081', // Pink background
            '&:hover': {
              backgroundColor: '#F50057', // Darker pink on hover
            },
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          Add New Person
        </Button>
      </Box>

      {/* Loading Spinner */}
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.05)', // Light background overlay
            borderRadius: '8px',
            padding: '30px 0',
          }}
        >
          <CircularProgress color="secondary" size={60} />
        </Box>
      ) : (
        // Data Display Section
        <Box>
          {persons.length === 0 ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ height: '200px' }}
            >
              <Typography variant="h6" color="text.secondary">
                No person records available!
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {persons.map((person, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <PersonCard person={person} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </Container>
  );
};

export default ShowPersonList;