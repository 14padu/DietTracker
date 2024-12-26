const DietModel = require('../models/dietModel');

// Create a new diet
exports.createDiet = async (req, res) => { // Renamed from 'creatediet'
    try {
        let newdiet = new DietModel({
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            availibility: req.body.availibility,
            BMI: req.body.BMI,
            contact_number: req.body.contact_number,
        });
        newdiet = await newdiet.save();
        res.send(newdiet);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Get all diets
exports.getAllDiets = async (req, res) => { // Fixed the return value
    try {
        const allDiets = await DietModel.find();
        res.send(allDiets); // Corrected from 'res.send(all)' to 'res.send(allDiets)'
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Get diet by ID
exports.getDietById = async (req, res) => {
    try {
        const dietById = await DietModel.findById(req.params.id);
        if (!dietById) return res.status(404).send('Diet not found in database');
        res.send(dietById);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Update a diet
exports.updateDiet = async (req, res) => {
    try {
        const updatedDiet = await DietModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            BMI: req.body.BMI,
            contact_number: req.body.contact_number,
            availibility: req.body.availibility,
            weight: req.body.weight,
            age: req.body.age
        }, { new: true });

        if (!updatedDiet) return res.status(404).send('Diet not found in database');
        res.send(updatedDiet);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Delete a diet by ID
exports.deleteDiet = async (req, res) => {
    try {
        const dietById = await DietModel.findByIdAndDelete(req.params.id);
        if (!dietById) return res.status(404).send('Diet not found in database');
        res.send("Diet deleted successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};
