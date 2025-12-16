const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Cutting Form Routes
router.post('/cutting', formController.createCutting);
router.get('/cutting', formController.getAllCutting);
router.get('/cutting/:id', formController.getCuttingById);
router.put('/cutting/:id', formController.updateCutting); // Add this
router.delete('/cutting/:id', formController.deleteCutting); // Add this

// Packing Form Routes
router.post('/packing', formController.createPacking);
router.get('/packing', formController.getAllPacking);
router.put('/packing/:id', formController.updatePacking); // Add this
router.delete('/packing/:id', formController.deletePacking); // Add this

// Overlock Form Routes
router.post('/overlock', formController.createOverlock);
router.get('/overlock', formController.getAllOverlock);
router.put('/overlock/:id', formController.updateOverlock); // Add this
router.delete('/overlock/:id', formController.deleteOverlock); // Add this

// Grading Form Routes
router.post('/grading', formController.createGrading);
router.get('/grading', formController.getAllGrading);
router.put('/grading/:id', formController.updateGrading); // Add this
router.delete('/grading/:id', formController.deleteGrading); // Add this

// Single Needle Form Routes
router.post('/single-needle', formController.createSingleNeedle);
router.get('/single-needle', formController.getAllSingleNeedle);
router.put('/single-needle/:id', formController.updateSingleNeedle); // Add this
router.delete('/single-needle/:id', formController.deleteSingleNeedle); // Add this

// Dashboard Routes
router.get('/all-data', formController.getAllFormsData);
router.get('/dashboard-stats', formController.getDashboardStats);

module.exports = router;