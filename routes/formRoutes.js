const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// ✅ ADD THIS ROUTE - Root endpoint for /api/forms
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
            
            "POST /overlock - Submit overlock form", 
            "GET /overlock - Get all overlock forms",
            
            "POST /grading - Submit grading form",
            "GET /grading - Get all grading forms",
            
            "POST /single-needle - Submit single needle form",
            "GET /single-needle - Get all single needle forms",
            
            "GET /all-data - Get all forms data combined",
            "GET /dashboard-stats - Get dashboard statistics"
        ],
        documentation: "Use the endpoints above to interact with the system"
    });
});

// Cutting Form Routes
router.post('/cutting', formController.createCutting);
router.get('/cutting', formController.getAllCutting);
// ... rest of your routes remain SAME
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
