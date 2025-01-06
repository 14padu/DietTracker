import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CircularProgress,
  Box
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios from 'axios';

const QRCodePage = () => {
  const [persons, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = 'https://bkmgmt-deploy.onrender.com/show-book/';

  useEffect(() => {
    axios.get('/api/persons')
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching persons:', err);
        setLoading(false);
      });
  }, []);
