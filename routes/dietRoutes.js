const express = require('express');
const router = express.Router();
const dietController = require('../controllers/dietController.js');

// Corrected function references
router.post('/', dietController.createDiet); // Accessible at /api/diets
router.get('/', dietController.getAllDiets); // Accessible at /api/diets
router.get('/:id', dietController.getDietById); // Accessible at /api/diets/:id
router.put('/:id', dietController.updateDiet); // Accessible at /api/diets/:id
router.delete('/:id', dietController.deleteDiet); // Accessible at /api/diets/:id

module.exports = router;
