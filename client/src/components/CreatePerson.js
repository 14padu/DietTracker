import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from '@mui/material';

const CreatePerson = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    name: '',
    age: '',
    contact_number: '',
    BMI: '',
    weight: '',
    availibility: ''
    
  });

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://diet-track-5chn.onrender.com/api/diets', person)
      .then(() => {
        setPerson({
          name: '',
          age: '',
          contact_number: '',
          BMI: '',
          weight: '',
          availibility: ''
          

        });

        toast.success('Person added successfully!', {
          position: 'top-right',
          autoClose: 3000,
          theme: 'dark',
        });

        navigate('/person-list');
      })
      .catch((err) => {
        console.error('Error creating person:', err);

        toast.error('Failed to add person. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
        });
      });
  };

  const handleCancel = () => {
    navigate('/person-list');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <ToastContainer />
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: '12px',
          backgroundColor: 'background.paper',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            Add a New Person
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Fill out the details to add a new person to the database.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Name */}
          <TextField
            label="Name"
            name="name"
            type='String'
            variant="outlined"
            fullWidth
            required
            value={person.name}
            onChange={onChange}
            inputMode={{
              style: { color: 'black' }}}
          />

          {/* Age */}
          <TextField
            label="Age"
            name="age"
            type="number"
            variant="outlined"
            fullWidth
            required
            value={person.age}
            onChange={onChange}
            inputMode={{
              style: { color: 'black' }}}
          />

          {/* Contact Number */}
          <TextField
            label="Contact Number"
            name="contact_number"
            type="number"
            variant="outlined"
            fullWidth
            required
            value={person.contact_number}
            onChange={onChange}
            inputMode={{
              style: { color: 'black' }}}
          />

          {/* BMI */}
          <TextField
            label="BMI"
            name="BMI"
            type="number"
            variant="outlined"
            fullWidth
            required
            value={person.BMI}
            onChange={onChange}
            inputMode={{
              style: { color: 'black' }}}
          />

          {/* Weight */}
          <TextField
            label="Weight (kg)"
            name="weight"
            type="number"
            variant="outlined"
            fullWidth
            required
            value={person.weight}
            onChange={onChange}
            inputMode={{
              style: { color: 'black' }}}
          />

         
           {/* availibility */}
           <TextField
            label="availibility "
            name="availibility"
            type="number"
            variant="outlined"
            fullWidth
            required
            value={person.availibility}
            onChange={onChange}
            inputMode={{
              style: { color: 'black' }}}
          />
          {/* Button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Person
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              onClick={handleCancel}
              sx={{ ml: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreatePerson;
