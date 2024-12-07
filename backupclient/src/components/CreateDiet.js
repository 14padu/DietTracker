import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

const CreateDiet = (props) => {
  const navigate = useNavigate();
  const [Diet, setDiet] = useState({
    name: '',
    date: '',
    distancecovered: '',
    weight: '',
  });
  const [showToast, setShowToast] = useState(false);

  const onChange = (e) => {
    set({ ...Diet.Diet, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/Diet', Diet)
      .then((res) => {
        setTrack({
          name: '',
          date: '',
          distancecovered: '',
          weight: '',
        });

        // Show the success alert
        toast.success('Track added successfully!', {
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

        // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
          setShowToast(false); // Hide the toast
          navigate('/'); // Navigate to homepage
        }, 5000); // Adjust the timeout as needed

      })
      .catch((err) => {
        console.log('Error in CreateDiet!');
        console.log('The error is -> ')
        console.log(err)
        // Show the success alert
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
    <div className='CreateDiet'>
      {/* <Navbar /> */}
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

      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Track List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Diet</h1>
            <p className='lead text-center'>Create new Diet</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  className='form-control'
                  value={Diet.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Date'
                  name='name'
                  className='form-control'
                  value={track.Date}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Steps'
                  name='steps'
                  className='form-control'
                  value={Diet.steps}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  
                  className='form-control'
                  value={track.caloriesburned}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='distancecovered'
                  placeholder='distancecovered'
                  name='distancecovered'
                  className='form-control'
                  value={Diet.distancecovered}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='number'
                  placeholder='weight'
                  name='weight'
                  className='form-control'
                  value={track.weight}
                  onChange={onChange}
                />
              </div>
              <br />

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default CreateDiet;