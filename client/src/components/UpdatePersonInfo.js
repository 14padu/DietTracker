import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdatePersonInfo(props) {
  const [person, setperson] = useState({
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
      .get(`/api/persons/${id}`)
      .then((res) => {
        setPerson({
          name: res.data.name,
          age: res.data.age,
          weight: res.data.weight,
          BMI: res.data.BMI,
          contact_number: res.data.contact_number,
          availibility:res.data.availibility
        
        });
      })
      .catch((err) => {
        console.log('Error from UpdatePersonInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: person.name,
      age: person.age,
      weight: person.weight,
      BMI: person.BMI,
      contact_number: person.contact_number,
      availibility:person.availibility
      
    };

    axios
      .put(`/api/perons/${id}`, data)
      .then((res) => {
        navigate(`/show-person/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdatePersonInfo PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdatePersonInfo'>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Person List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Person</h1>
            <p className='lead text-center'>Update Person's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>name</label>
              <input
                type='text'
                placeholder='name of the person'
                name='name'
                className='form-control'
                value={person.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='age'>age</label>
              <input
                type='text'
                placeholder='age'
                name='age'
                className='form-control'
                value={person.age}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='weight'>weight</label>
              <input
                type='text'
                placeholder='weight'
                name='weight'
                className='form-control'
                value={person.weight}
                onChange={onChange}
              />
            </div>
          

            <div className='form-group'>
              <label htmlFor='contact_number'>contact number</label>
              <input
                type='text'
                placeholder='contact number'
                name='contact_number'
                className='form-control'
                value={person.contact_number}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='BMI'>BMI</label>
              <input
                type='text'
                placeholder='BMI of the Person'
                name='BMI'
                className='form-control'
                value={person.BMI}
                onChange={onChange}
              />
            </div>
            <br />

            <br />

<div className='form-group'>
  <label htmlFor='BMI'>avilibility</label>
  <input
    type='text'
    placeholder='availibility of the Person'
    name='availibility'
    className='form-control'
    value={person.availibility}
    onChange={onChange}
  />
</div>
<br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Person
            </button>
            <br /> <br />
          </form>
        </div>
      </div>

    </div>
  );
}

export default UpdatePersonInfo;







