const express = require('express')
const router = express.Router()
const dietController =require('../controllers/dietController.js');

    router.post('/diets',dietController.createDiet);
    router.get('/diets', dietController.getAllDiet);
    router.get('/diets/:id', dietController.getDietById);
    router.put('/diets/:id', dietController.updateDiet);
    router.delete('/diets/:id', dietController.deleteDiet);


    module.exports = router;