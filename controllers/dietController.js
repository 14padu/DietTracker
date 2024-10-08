const DietModel = require('../models/dietModel');

exports.createDiet = async (req, res) => {
    try {
        let singleDiet = new DietModel({ 
           name:req.body.name,
           age:req.body.age,
           contact_number:req.body.contact_number,
        });
           
        
        singleDiet = await singleDiet.save();
        res.send(singleDiet);
    } catch (err) {
        res.status(400).send(err.message);
    }
    };


exports.getAllDiet = async (req, res) => {
    try {
        const allDiet = await DietModel.find();
        res.send(allDiet);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.getDietById = async (req, res) => {
    try {
        const DietById = await DietModel.findById(req.params.id);
        if (!DietById) return res.status(404).send('Diet not found in database');
        res.send(DietById);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.updateDiet = async (req, res) => {
    try {
        const updatedDiet = await DietModel.findByIdAndUpdate(req.params.id, { 
            name:req.body.name,
            age:req.body.age,
            contact_number:req.body.contact_number
        }, { new: true });

        if (!updatedDiet) return res.status(404).send('Diet not found in database');
        res.send(updatedDiet);
        
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.deleteDiet= async (req, res) => {
    try {
        const DietById = await DietModel.findByIdAndDelete(req.params.id);
        if (!DietById) return res.status(404).send('Diet not found in database');
        
        res.send("Diet deleted successfully");
    } catch (err) {
        res.status(400).send(err.message);
    };
}