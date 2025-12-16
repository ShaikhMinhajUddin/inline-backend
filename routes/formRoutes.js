const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Cutting Form Routes
router.post('/cutting', formController.createCutting);
router.get('/cutting', formController.getAllCutting);
router.get('/cutting/:id', formController.getCuttingById);
router.put('/cutting/:id', formController.updateCutting);
router.delete('/cutting/:id', formController.deleteCutting);

// Packing Form Routes
router.post('/packing', formController.createPacking);
router.get('/packing', formController.getAllPacking);
router.put('/packing/:id', formController.updatePacking);
router.delete('/packing/:id', formController.deletePacking);

// Overlock Form Routes
router.post('/overlock', formController.createOverlock);
router.get('/overlock', formController.getAllOverlock);
router.put('/overlock/:id', formController.updateOverlock);
router.delete('/overlock/:id', formController.deleteOverlock);

// Grading Form Routes
router.post('/grading', formController.createGrading);
router.get('/grading', formController.getAllGrading);
router.put('/grading/:id', formController.updateGrading);
router.delete('/grading/:id', formController.deleteGrading);

// Single Needle Form Routes
router.post('/single-needle', formController.createSingleNeedle);
router.get('/single-needle', formController.getAllSingleNeedle);
router.put('/single-needle/:id', formController.updateSingleNeedle);
router.delete('/single-needle/:id', formController.deleteSingleNeedle);

// ========== IMPORTANT: Add These Routes ==========

// Get All Forms Data Combined
router.get('/all-data', formController.getAllFormsData);

// Get Dashboard Statistics
router.get('/dashboard-stats', formController.getDashboardStats);

module.exports = router;
