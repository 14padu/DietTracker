const express = require('express')
const router = express.Router()
const DietController =require('../controllers/DietController.js');

    router.post('/Diets', DietController.createDiet);
    router.get('/Diets', DietController.getAllDiet);
    router.get('/Diets/:id', DietController.getDietById);
    router.put('/Diets/:id', DietController.updateDiet);
    router.delete('/Diets/:id', DietController.deleteDiet);


    module.exports = router;