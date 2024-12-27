import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TableViewIcon from '@mui/icons-material/TableView';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

const ExportPage = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://5000-14padu-diettracker-r6iwigoyfpk.ws-us117.gitpod.io/api/diets')
      .then((res) => {
        setPersons(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching persons:', err);
        setLoading(false);
      });
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();
  
    // Set title and metadata
    doc.setFontSize(16);
    doc.text('Persons List', 14, 15);
    doc.setFontSize(10);
    // doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 25);
  
    // Define table columns and rows
    const tableColumn = ['Name', 'Age', 'BMI', 'Contact Number', 'Weight'];
    const tableRows = persons.map((person) => [
      person.name,
      person.age,
      person.BMI,
      person.contact_number || 'N/A', // Handle missing contact number gracefully
      person.weight || 'N/A', // Handle missing weight gracefully
      person.admit_date || 'N/A',
      person.availibility || 'N/A'
    ]);
  
    // Add the table to the PDF
    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
      theme: 'grid',
      styles: { fontSize: 8 },
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
    });
  
    // Save the file
    doc.save('persons-list.pdf');
  };
  

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      persons.map((person) => ({
        Name: person.name,
        Age: person.age,
        BMI: person.BMI,
        'Contact Number': person.contact_number,
        Weight: person.weight,
        availibility: person.availibility,
        admit_date: person.admit_date
      }))
    );

    const workperson = XLSX.utils.person_new();
    XLSX.utils.person_append_sheet(workperson, worksheet, 'Persons');
    const excelBuffer = XLSX.write(workperson, { personType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    saveAs(data, 'persons-list.xlsx');
  };

  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      persons.map((person) => ({
        Name: person.name,
        Age: person.age,
        BMI: person.BMI,
        'Contact Number': person.contact_number,
        Weight: person.weight,
        availibility: person.availibility,
        admit_date: person.admit_date

      }))
    );

    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const data = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(data, 'persons-list.csv');
  };

  const exportToText = () => {
    let content = 'PERSONS LIST\n\n';
    content += `Generated on: ${new Date().toLocaleDateString()}\n\n`;

    persons.forEach((person, index) => {
      content += `${index + 1}. PERSON DETAILS\n`;
      content += `Name: ${person.name}\n`;
      content += `Age: ${person.age}\n`;
      content += `BMI: ${person.BMI}\n`;
      content += `Contact Number: ${person.contact_number}\n`;
      content += `Weight: ${person.weight}\n`;
      content += `availibility: ${person.availibility}\n`;
      content += `admit_date: ${person.admit_date}\n`;
      content += '\n----------------------------\n\n';
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'persons-list.txt');
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
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
            Export Persons
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Choose a format to export the persons list
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<PictureAsPdfIcon />}
            onClick={exportToPDF}
            fullWidth
          >
            Export as PDF
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<TableViewIcon />}
            onClick={exportToCSV}
            fullWidth
          >
            Export as CSV
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            onClick={exportToExcel}
            fullWidth
          >
            Export as Excel
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<DescriptionIcon />}
            onClick={exportToText}
            fullWidth
          >
            Export as Text
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 4 }} align="center" color="textSecondary">
          Total Persons: {persons.length}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ExportPage;
