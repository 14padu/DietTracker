const DietModel = require('../models/dietModel');

// Create a new diet
exports.createDiet = async (req, res) => {
    try {
        let newdiet = new DietModel({
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            BMI: req.body.BMI,
            contact_number: req.body.contact_number,
            admit_date: req.body.admit_date,
            availibility: req.body.availibility
        });
        newdiet = await newdiet.save(); 
        res.send(newdiet);
    } catch (err) {
        res.status(400).send(`Error creating diet: ${err.message}`);
    }
};

// Get all diets
exports.getAllDiets = async (req, res) => {
    try {
        const allDiets = await DietModel.find();
        res.send(allDiets);
    } catch (err) {
        res.status(400).send(`Error fetching diets: ${err.message}`);
    }
};

// Get diet by ID
exports.getDietById = async (req, res) => {
    try {
        const dietById = await DietModel.findById(req.params.id);
        if (!dietById) return res.status(404).send('Diet not found in database');
        res.send(dietById);
    } catch (err) {
        res.status(400).send(`Error fetching diet: ${err.message}`);
    }
};

// Update a diet
exports.updateDiet = async (req, res) => {
    try {
        const updatedDiet = await DietModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            BMI: req.body.BMI,
            contact_number: req.body.contact_number,
            admit_date: req.body.admit_date,
            availibility: req.body.availibility
        }, { new: true });

        if (!updatedDiet) return res.status(404).send('Diet not found in database');
        res.send(updatedDiet);
    } catch (err) {
        res.status(400).send(`Error updating diet: ${err.message}`);
    }
};

// Delete a diet by ID
exports.deleteDiet = async (req, res) => {
    try {
        const dietById = await DietModel.findByIdAndDelete(req.params.id);
        if (!dietById) return res.status(404).send('Diet not found in database');
        res.send('Diet deleted successfully');
    } catch (err) {
        res.status(400).send(`Error deleting diet: ${err.message}`);
    }
};
