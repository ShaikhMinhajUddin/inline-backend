const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// ✅ Root endpoint
router.get('/', (req, res) => {
    res.json({
        message: "Factory Management System API - Forms Endpoint",
        version: "1.0.0",
        availableEndpoints: [
            "POST /cutting - Submit cutting form",
            "GET /cutting - Get all cutting forms",
            "GET /cutting/:id - Get single cutting form",
            "PUT /cutting/:id - Update cutting form", 
            "DELETE /cutting/:id - Delete cutting form",
            
            "POST /packing - Submit packing form",
            "GET /packing - Get all packing forms",
            "GET /packing/:id - Get single packing form",
            "PUT /packing/:id - Update packing form",
            "DELETE /packing/:id - Delete packing form",
            
            "POST /overlock - Submit overlock form", 
            "GET /overlock - Get all overlock forms",
            "GET /overlock/:id - Get single overlock form",
            "PUT /overlock/:id - Update overlock form",
            "DELETE /overlock/:id - Delete overlock form",
            
            "POST /grading - Submit grading form",
            "GET /grading - Get all grading forms",
            "GET /grading/:id - Get single grading form",
            "PUT /grading/:id - Update grading form",
            "DELETE /grading/:id - Delete grading form",
            
            "POST /single-needle - Submit single needle form",
            "GET /single-needle - Get all single needle forms",
            "GET /single-needle/:id - Get single needle form",
            "PUT /single-needle/:id - Update single needle form",
            "DELETE /single-needle/:id - Delete single needle form",
            
            "GET /all-data - Get all forms data combined",
            "GET /dashboard-stats - Get dashboard statistics"
        ]
    });
});

// Cutting Form Routes
router.post('/cutting', formController.createCutting);
router.get('/cutting', formController.getAllCutting);
router.get('/cutting/:id', formController.getCuttingById);
router.put('/cutting/:id', formController.updateCutting);
router.delete('/cutting/:id', formController.deleteCutting);

// Packing Form Routes
router.post('/packing', formController.createPacking);
router.get('/packing', formController.getAllPacking);
router.get('/packing/:id', formController.getPackingById);
router.put('/packing/:id', formController.updatePacking);
router.delete('/packing/:id', formController.deletePacking);

// Overlock Form Routes
router.post('/overlock', formController.createOverlock);
router.get('/overlock', formController.getAllOverlock);
router.get('/overlock/:id', formController.getOverlockById);
router.put('/overlock/:id', formController.updateOverlock);
router.delete('/overlock/:id', formController.deleteOverlock);

// Grading Form Routes
router.post('/grading', formController.createGrading);
router.get('/grading', formController.getAllGrading);
router.get('/grading/:id', formController.getGradingById);
router.put('/grading/:id', formController.updateGrading);
router.delete('/grading/:id', formController.deleteGrading);

// Single Needle Form Routes
router.post('/single-needle', formController.createSingleNeedle);
router.get('/single-needle', formController.getAllSingleNeedle);
router.get('/single-needle/:id', formController.getSingleNeedleById);
router.put('/single-needle/:id', formController.updateSingleNeedle);
router.delete('/single-needle/:id', formController.deleteSingleNeedle);

// Combined Data Routes
router.get('/all-data', formController.getAllFormsData);
router.get('/dashboard-stats', formController.getDashboardStats);

module.exports = router;