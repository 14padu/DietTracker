const DietModel = require('../models/dietModel');  

// Create a new diet
exports.creatediet = async (req, res) => {
    try {
        let singleDiet= new DietModel({
            name:req.body.name,
            age:req.body.age,
            weight:req.body.weight,
            availibility:req.body.availability,
            BMI:req.body.BMI,
            contact_number:req.body.contact_number,
    
            
    
        });
        newdiet = await newdiet.save(); 
        res.send(newdiet); 
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};


// Get all tracks
exports.getAllDiets = async (req, res) => {
    try {
        const allDiets = await DietModel.find();
        res.send(all);
    } catch (err) {
        res.status(400).send(err.message);
    }
};



exports.getDietById = async (req, res) => {
    try {
        const dietById = await DietModel.findById(req.params.id); // Find track by ID
        if (!dietById) return res.status(404).send('Diet not found in database'); // If track is not found, return 404
        res.send(dietById); // Send the track as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};


exports.updateDiet = async (req, res) => {
    try {
        const updatedDiet = await DietModel.findByIdAndUpdate(req.params.id, {
            name:req.body.name,
            BMI:req.body.BMI,
            contact_number:req.body.contact_number,
            availibility:req.body.availibility,
            weight:req.body.weight,
            age:req.body.age
        }, { new: true }); // Return the updated Track

        if (!updatedDiet) return res.status(404).send('Diet not found in database'); // If track is not found, return 404
        res.send(updatedDiet); // Send the updated  track as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};
    

// Delete a room by ID
exports.deleteDiet = async (req, res) => {
    try {
        const dietById = await DietModel.findByIdAndDelete(req.params.id); // Find track by ID and delete it
        if (!dietById) return res.status(404).send('Diet not found in database'); // If track is not found, return 404
        res.send("Diet deleted successfully"); // Send success message
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

