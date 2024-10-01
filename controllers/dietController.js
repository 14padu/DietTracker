const DietModel = require('../models/DietModel');

exports.createDiet = async (req, res) => {
    try {
        let singleDiet = new DietModel({ title: req.body.title, author: req.body.author });
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
        const DietById = await DietModel.findByIdAndUpdate(req.params.id, { title: req.body.title, author: req.body.author }, { new: true });
        if (!DietById) return res.status(404).send('Diet not found in database');
        res.send(DietById);
        console.log("Diet updated successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

exports.deleteDiet= async (req, res) => {
    try {
        const DietById = await DietModel.findByIdAndDelete(req.params.id);
        if (!DietById) return res.status(404).send('Diet not found in database');
        res.status(204).send();
        res.send("Diet deleted successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};