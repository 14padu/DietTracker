// src/components/SearchBooks.js
import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PersonCard from './PersonCard';
import axios from 'axios';

const SearchPersons = () => {
    const [persons, setPersons] = useState([]);
    const [filteredPersons, setFilteredPersons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contact_Number, setcontact_Number] = useState([]);

    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'title',
        sortBy: 'title',
        sortOrder: 'asc',
        contact_Number: 'all'
    });

    useEffect(() => {
        axios.get('https://diet-track-5chn.onrender.com/api/diets')
            .then(res => {
                setPersons(res.data);
                setFilteredPersons(res.data);
                // Extract unique publishers
                const contact_Number = [...new Set(res.data.map(person => person.contact_Number))];
                setcontact_Number(contact_Number);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching persons:', err);
                setLoading(false);
            });
    }, []);

    const applyFilters = () => {
        let result = [...persons];

        // Apply search
        if (filters.searchTerm) {
            result = result.filter(person => {
                const searchValue = person[filters.searchField]?.toString().toLowerCase();
                return searchValue?.includes(filters.searchTerm.toLowerCase());
            });
        }

        // Apply publisher filter
        if (filters.publisher !== 'all') {
            result = result.filter(person => person.contact_Nmuber === filters.contact_Number);
        }

        // Apply sorting
        result.sort((a, b) => {
            let valueA = a[filters.sortBy]?.toString().toLowerCase();
            let valueB = b[filters.sortBy]?.toString().toLowerCase();

            if (filters.sortBy === 'contact_Number') {
                valueA = new Date(a.contact_Number);
                valueB = new Date(b.contact_Number);
            }

            if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredPersons(result);
    };

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const resetFilters = () => {
        setFilters({
            searchTerm: '',
            searchField: 'title',
            sortBy: 'title',
            sortOrder: 'asc',
         contact_Number: 'all'
        });
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                Search Persons
            </Typography>

            {/* Search and Filter Section */}
            <Card sx={{ mb: 4, p: 2 }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        {/* Search Field */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Search"
                                value={filters.searchTerm}
                                onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                                InputProps={{
                                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                                }}
                            />
                        </Grid>

                        {/* Search By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Search By</InputLabel>
                                <Select
                                    value={filters.searchField}
                                    label="Search By"
                                    onChange={(e) => setFilters({ ...filters, searchField: e.target.value })}
                                >
                                    <MenuItem value="BMI">BMI</MenuItem>
                                    <MenuItem value="Name">Name</MenuItem>
                                    <MenuItem value="weight">weight</MenuItem>
                                    <MenuItem value="contact_Number">contact_Number</MenuItem>
                                    <MenuItem value="availibility">availibility</MenuItem>
                                    <MenuItem value="age">age</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                    value={filters.sortBy}
                                    label="Sort By"
                                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                                >
                                    <MenuItem value="Name">Title</MenuItem>
                                    <MenuItem value="age">Author</MenuItem>
                                    <MenuItem value="contact_Number">contact_Number</MenuItem>
                                    <MenuItem value="BMI">BMI</MenuItem>
                                    <MenuItem value="weight">weight</MenuItem>
                                    <MenuItem value="availibility">availibility</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort Order */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Order</InputLabel>
                                <Select
                                    value={filters.sortOrder}
                                    label="Order"
                                    onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                                >
                                    <MenuItem value="asc">Ascending</MenuItem>
                                    <MenuItem value="desc">Descending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Publisher Filter */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>contact_Number</InputLabel>
                                <Select
                                    value={filters.contact_Number}
                                    label="contact_Number"
                                    onChange={(e) => setFilters({ ...filters, contact_Number: e.target.value })}
                                >
                                    <MenuItem value="all">All contact_Number</MenuItem>
                                    {contact_Number.map((contact_Number, index) => (
                                        <MenuItem key={index} value={contact_Number}>
                                            {contact_Number}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Reset Button */}
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<RestartAltIcon />}
                                    onClick={resetFilters}
                                >
                                    Reset Filters
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Results Section */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1" color="text.secondary">
                    Found {filteredPersons.length} persons
                </Typography>
            </Box>

            {/* Books Grid */}
            <Grid container spacing={3}>
                {filteredPersons.map((person) => (
                    <Grid item xs={12} sm={6} md={4} key={person._id}>
                        <PersonCard person={person} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchPersons;