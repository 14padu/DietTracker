// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Paper } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 5 }}>
      <Paper 
        elevation={3} 
        sx={{
          backgroundColor: '#f7f7f7', 
          borderRadius: '12px', 
          padding: '30px', 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
        }}
      >
        <Typography variant="h2" component="h1" sx={{ color: '#4CAF50', fontWeight: 'bold' }} gutterBottom>
          Welcome to Diet Tracker
        </Typography>
        <Typography variant="h5" sx={{ color: '#7A7A7A', marginBottom: '30px' }}>
          Your Diet, Your Priority
        </Typography>

        <Box display="flex" justifyContent="center" gap={3}>
          <Button 
            component={Link} 
            to="/person-list" 
            sx={{
              backgroundColor: '#4CAF50', 
              color: '#fff', 
              padding: '12px 24px', 
              borderRadius: '30px', 
              fontWeight: '500', 
              transition: 'background-color 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#45a049',
              }
            }}
            variant="contained"
          >
            View Persons
          </Button>

          <Button 
            component={Link} 
            to="/person-export" 
            sx={{
              backgroundColor: '#2196F3', 
              color: '#fff', 
              padding: '12px 24px', 
              borderRadius: '30px', 
              fontWeight: '500', 
              transition: 'background-color 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#1e88e5',
              }
            }}
            variant="contained"
          >
            Export List
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default HomePage;
