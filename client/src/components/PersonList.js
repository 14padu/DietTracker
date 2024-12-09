import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Notification from './Notification';

const API_URL = process.env.REACT_APP_API_URL

const DietList = () => {
  const [Diet, setDiet] = useState([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const fetchDiet = async () => {
      try {
        const response = await axios.get(API_URL);
        setDiet(response.data);
      } catch (error) {
        console.error('Error fetching Diet:', error);
      }
    };
    fetchDiet();
  }, []);

  return (
    <div className="box-container">
      <h1>All Diet List</h1>
      <Link to="/add" className="btn btn-add add-Diet-button">Add Diet</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th> </th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {Diet.map(Diet => (<tr key={Diet.id} className="Diet-name"><td>
                <Link to={`/detail/${Diet.id}`}>{Diet.name}</Link></td>
                <td> </td>
              <td>{Diet.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {notification && (
        <Notification message={notification} onClose={() => setNotification('')} />
      )}
    </div>
  );
};

export default DietList;