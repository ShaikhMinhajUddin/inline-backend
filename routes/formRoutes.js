// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Cutting Form Routes - FIXED ORDER
router.post('/cutting', formController.createCutting);
router.get('/cutting', formController.getAllCutting);
router.delete('/cutting/all', formController.deleteAllCutting); // ✅ THIS MUST COME BEFORE /:id
router.get('/cutting/:id', formController.getCuttingById);
router.put('/cutting/:id', formController.updateCutting);
router.delete('/cutting/:id', formController.deleteCutting); // ✅ THIS COMES AFTER /all

// Packing Form Routes - SAME FIX
router.post('/packing', formController.createPacking);
router.get('/packing', formController.getAllPacking);
router.delete('/packing/all', formController.deleteAllPacking); // ✅ BEFORE /:id
router.get('/packing/:id', formController.getPackingById);
router.put('/packing/:id', formController.updatePacking);
router.delete('/packing/:id', formController.deletePacking); // ✅ AFTER /all

// Overlock Form Routes - SAME FIX
router.post('/overlock', formController.createOverlock);
router.get('/overlock', formController.getAllOverlock);
router.delete('/overlock/all', formController.deleteAllOverlock); // ✅ BEFORE /:id
router.get('/overlock/:id', formController.getOverlockById);
router.put('/overlock/:id', formController.updateOverlock);
router.delete('/overlock/:id', formController.deleteOverlock); // ✅ AFTER /all

// Grading Form Routes - SAME FIX
router.post('/grading', formController.createGrading);
router.get('/grading', formController.getAllGrading);
router.delete('/grading/all', formController.deleteAllGrading); // ✅ BEFORE /:id
router.get('/grading/:id', formController.getGradingById);
router.put('/grading/:id', formController.updateGrading);
router.delete('/grading/:id', formController.deleteGrading); // ✅ AFTER /all

// Single Needle Form Routes - SAME FIX
router.post('/single-needle', formController.createSingleNeedle);
router.get('/single-needle', formController.getAllSingleNeedle);
router.delete('/single-needle/all', formController.deleteAllSingleNeedle); // ✅ BEFORE /:id
router.get('/single-needle/:id', formController.getSingleNeedleById);
router.put('/single-needle/:id', formController.updateSingleNeedle);
router.delete('/single-needle/:id', formController.deleteSingleNeedle); // ✅ AFTER /all

// Combined Data Routes
router.get('/all-data', formController.getAllFormsData);
router.get('/dashboard-stats', formController.getDashboardStats);

module.exports = router;