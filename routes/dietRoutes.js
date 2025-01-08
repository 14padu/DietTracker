const express = require('express');
const router = express.Router();
const dietController = require('../controllers/dietController.js');

 //Corrected function references
//router.get('/test', (req, res) => {
//res.status(200).send('Test route is working');

router.post('/diets', dietController.createDiet);
router.get('/diets', dietController.getAllDiets);
router.get('/diets/:id', dietController.getDietById);
router.put('/diets/:id', dietController.updateDiet);
router.delete('/diets/:id', dietController.deleteDiet);

module.exports = router;
