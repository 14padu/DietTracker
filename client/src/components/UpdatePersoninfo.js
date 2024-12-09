import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Navbar from './Navbar';
import Footer from './footer';

function UpdatePersonInfo(props) {
    const [person, setPerson] = useState({
        name: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        phnno: '',
        date: '',
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
                    height: res.data.height, 
                    weight: res.data.weight, 
                    phnno: res.data.phonno, 
                    date: res.data.date, 
                    
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
                    name:  person.name,
                    age:   person.age, 
                    height: person.height, 
                    weight: person.weight, 
                    phnno: person.phnno, 
                    date:  person.date, 
        }
        axios
            .put(`/api/persons/${id}`, data)
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
            <Navbar />

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
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                placeholder='Name Of The Person'
                                name='name'
                                className='form-control'
                                value={person.name}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='age'>Age</label>
                            <input
                                type='number'
                                placeholder='Age Of The Person'
                                name='age'
                                className='form-control'
                                value={person.age}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>
                            <input
                                type='text'
                                placeholder='Gender Of The Person'
                                name='gender'
                                className='form-control'
                                value={person.gender}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='height'>Height</label>
                            <textarea
                                type='number'
                                placeholder='Height Of the Person'
                                name='height'
                                className='form-control'
                                value={person.height}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='weight'>Weight</label>
                            <input
                                type='number'
                                placeholder='Weight Of The Person'
                                name='weight'
                                className='form-control'
                                value={person.weight}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor='phnno'>phone No.</label>
                            <input
                                type='number'
                                placeholder='Phone no of the person'
                                name='phnno'
                                className='form-control'
                                value={person.phnno}
                                onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <label htmlFor='date'>Date</label>
                            <input
                                type='date'
                                placeholder='Date they join'
                                name='date'
                                className='form-control'
                                value={person.date}
                                onChange={onChange}
                            />
                        </div>
                        <br />


                        <button
                            type='submit'
                            className='btn btn-outline-warning btn-lg btn-block'
                        >
                            Update Person
                        </button>
                        <br /> <br />
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default UpdatePersonInfo ;