import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '@mui/material';
import axios from 'axios';

const CreatePerson = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    name: '',
    age: '',
    contact_number: '',
    weight: '',
    bmi: '',
  });

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Log the person object to see if it looks correct
    console.log('Person data being sent:', person);

    // Validate data before sending
    if (!person.name || !person.age || !person.contact_number || !person.weight || !person.bmi) {
      toast.error('Please fill in all fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return;
    }

    axios
      .post('https://5000-14padu-diettracker-0yawcloo8rm.ws-us117.gitpod.io/api/diets', person)
      .then((res) => {
        setPerson({
          name: '',
          age: '',
          contact_number: '',
          weight: '',
          bmi: '',
        });

        toast.success('Person added successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });

        setTimeout(() => {
          navigate('/'); // Navigate to homepage
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in CreatePerson:', err);
        // Check if the error response contains more details
        if (err.response && err.response.data) {
          console.log('Error response from server:', err.response.data);
        }
        toast.error('Something went wrong, try again!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
  };

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <div className="CreatePerson">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide}
        />

        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Person List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Person</h1>
              <p className="lead text-center">Create new person</p>

              <form noValidate onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name of the Person"
                    name="name"
                    className="form-control"
                    value={person.name}
                    onChange={onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Age of the person"
                    name="age"
                    className="form-control"
                    value={person.age}
                    onChange={onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Weight"
                    name="weight"
                    className="form-control"
                    value={person.weight}
                    onChange={onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="BMI"
                    name="bmi"
                    className="form-control"
                    value={person.bmi}
                    onChange={onChange}
                  />
                </div>
                <br />
                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Contact Number"
                    name="contact_number"
                    className="form-control"
                    value={person.contact_number}
                    onChange={onChange}
                  />
                </div>
                <br />

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreatePerson;
