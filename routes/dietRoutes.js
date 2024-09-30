const express = require('express')
const router = express.Router()
const DietController =require('../controllers/DietController');

    router.post('/Diet', DietController.createDiet);
    router.get('/Diet', DietController.getAllDiet);
    router.get('/Diet/:id', DietController.getDietById);
    router.put('/Diet/:id', DietController.updateDiet);
    router.delete('/Diet/:id', DietController.deleteDiet);


    module.exports = router;