import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
  Divider,
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePersonInfo = () => {
  const [person, setPerson] = useState({
    name: '',
    age: '',
    weight: '',
    BMI: '',
    contact_number: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-14padu-diettracker-3r6s18esjam.ws-us117.gitpod.io/api/diets/${id}`)
      .then((res) => {
        setPerson({
          name: res.data.name,
          age: res.data.age,
          weight: res.data.weight,
          BMI: res.data.BMI,
          contact_number: res.data.contact_number,
        });
      })
      .catch((err) => {
        console.error('Error fetching person details:', err);
        toast.error('Failed to load person details.', { autoClose: 3000 });
      });
  }, [id]);

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://5000-14padu-diettracker-3r6s18esjam.ws-us117.gitpod.io/api/diets/${id}`, person)
      .then(() => {
        toast.success('Person updated successfully!', { autoClose: 3000 });
        navigate(`/show-person/${id}`);
      })
      .catch((err) => {
        console.error('Error updating person:', err);
        toast.error('Failed to update person. Please try again.', { autoClose: 3000 });
      });
  };

  return (
    <Container maxWidth="sm">
      <ToastContainer />
      <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Edit Person
        </Typography>
        <Divider sx={{ my: 2 }} />
        <form noValidate onSubmit={onSubmit}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Name"
              name="name"
              value={person.name}
              onChange={onChange}
              fullWidth
              required
            />
            <TextField
              label="Age"
              name="age"
              value={person.age}
              onChange={onChange}
              fullWidth
              required
              type="number"
            />
            <TextField
              label="Weight (kg)"
              name="weight"
              value={person.weight}
              onChange={onChange}
              fullWidth
              required
              type="number"
            />
            <TextField
              label="BMI"
              name="BMI"
              value={person.BMI}
              onChange={onChange}
              fullWidth
              required
              type="number"
            />
            <TextField
              label="Contact Number"
              name="contact_number"
              value={person.contact_number}
              onChange={onChange}
              fullWidth
              required
              type="tel"
            />
          </Box>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button type="submit" variant="contained" color="primary" size="large">
              Update Person
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdatePersonInfo;
