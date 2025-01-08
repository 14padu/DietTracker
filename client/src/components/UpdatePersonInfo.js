import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import axios from "axios";

function UpdatePersonInfo() {
  const [person, setPerson] = useState({
    name: "",
    age: "",
    weight: "",
    bmi: "",
    contact_number: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://5000-14padu-diettracker-0yawcloo8rm.ws-us117.gitpod.io/api/diets/${id}`
      )
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        console.error("Error from UpdatePerson GET request", err);
        alert("Failed to fetch person details.");
      });
  }, [id]);

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://5000-14padu-diettracker-0yawcloo8rm.ws-us117.gitpod.io/api/diets/${id}`,
        person
      )
      .then(() => {
        alert("Person updated successfully!");
        navigate(`/detail/${id}`);
      })
      .catch((err) => {
        console.error("Error in UpdatePerson PUT request", err);
        alert("Failed to update person details. Please try again.");
      });
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={2}>
        <Typography variant="h4" align="center" gutterBottom>
          Edit Person
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Update Person's Information
        </Typography>
      </Box>

      <Box mb={2}>
        <Button
          component={Link}
          to="/list"
          variant="outlined"
          color="secondary"
          fullWidth
        >
          Show Persons List
        </Button>
      </Box>

      <form noValidate onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={person.name}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Age"
              type="number"
              name="age"
              value={person.age}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Weight"
              type="number"
              name="weight"
              value={person.weight}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="BMI"
              name="bmi"
              value={person.bmi}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contact Number"
              type="number"
              name="contact_number"
              value={person.contact_number}
              onChange={onChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Update Person
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default UpdatePersonInfo;
