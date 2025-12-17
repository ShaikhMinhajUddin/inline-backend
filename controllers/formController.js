// controllers/formController.js - UPDATED
const { Cutting, Packing, Overlock, Grading, SingleNeedle } = require('../models/FormModels');

// ========== CUTTING FORM CONTROLLERS (unchanged) ==========
exports.createCutting = async (req, res) => {
    try {
        const cuttingData = new Cutting(req.body);
        const savedData = await cuttingData.save();
        res.status(201).json({
            success: true,
            message: 'Cutting form submitted successfully',
            data: savedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error submitting cutting form',
            error: error.message
        });
    }
};

// ========== GET ALL FORMS DATA (update for new fields) ==========
exports.getAllFormsData = async (req, res) => {
    try {
        const [cutting, packing, overlock, grading, singleNeedle] = await Promise.all([
            Cutting.find().sort({ createdAt: -1 }),
            Packing.find().sort({ createdAt: -1 }),
            Overlock.find().sort({ createdAt: -1 }),
            Grading.find().sort({ createdAt: -1 }),
            SingleNeedle.find().sort({ createdAt: -1 })
        ]);

        // Add formType to each record for AllDataView compatibility
        const cuttingWithType = cutting.map(item => ({ ...item._doc, formType: 'cutting' }));
        const packingWithType = packing.map(item => ({ ...item._doc, formType: 'packing' }));
        const overlockWithType = overlock.map(item => ({ ...item._doc, formType: 'overlock' }));
        const gradingWithType = grading.map(item => ({ ...item._doc, formType: 'grading' }));
        const singleNeedleWithType = singleNeedle.map(item => ({ ...item._doc, formType: 'single-needle' }));

        res.status(200).json({
            success: true,
            data: {
                cutting: cuttingWithType,
                packing: packingWithType,
                overlock: overlockWithType,
                grading: gradingWithType,
                singleNeedle: singleNeedleWithType
            },
            counts: {
                cutting: cutting.length,
                packing: packing.length,
                overlock: overlock.length,
                grading: grading.length,
                singleNeedle: singleNeedle.length,
                total: cutting.length + packing.length + overlock.length + grading.length + singleNeedle.length
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching all forms data',
            error: error.message
        });
    }
};

// ========== GET DASHBOARD STATISTICS (unchanged) ==========
exports.getDashboardStats = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const [cutting, packing, overlock, grading, singleNeedle] = await Promise.all([
            Cutting.find({ createdAt: { $gte: today } }),
            Packing.find({ createdAt: { $gte: today } }),
            Overlock.find({ createdAt: { $gte: today } }),
            Grading.find({ createdAt: { $gte: today } }),
            SingleNeedle.find({ createdAt: { $gte: today } })
        ]);

        const totalToday = cutting.length + packing.length + overlock.length + grading.length + singleNeedle.length;
        
        const totalInspected = grading.reduce((sum, item) => sum + (item.inspection || 0), 0);
        const totalPassed = grading.reduce((sum, item) => sum + (item.pass || 0), 0);
        const qualityScore = totalInspected > 0 ? Math.round((totalPassed / totalInspected) * 100) : 0;

        res.status(200).json({
            success: true,
            stats: {
                totalToday,
                totalForms: {
                    cutting: cutting.length,
                    packing: packing.length,
                    overlock: overlock.length,
                    grading: grading.length,
                    singleNeedle: singleNeedle.length
                },
                qualityScore,
                pendingReviews: 0
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching dashboard stats',
            error: error.message
        });
    }
};

// ========== OTHER GET ALL CONTROLLERS (unchanged) ==========
exports.getAllCutting = async (req, res) => {
    try {
        const cuttingData = await Cutting.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: cuttingData.length,
            data: cuttingData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching cutting data',
            error: error.message
        });
    }
};

exports.getAllPacking = async (req, res) => {
    try {
        const packingData = await Packing.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: packingData.length,
            data: packingData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching packing data',
            error: error.message
        });
    }
};

exports.getAllOverlock = async (req, res) => {
    try {
        const overlockData = await Overlock.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: overlockData.length,
            data: overlockData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching overlock data',
            error: error.message
        });
    }
};

exports.getAllGrading = async (req, res) => {
    try {
        const gradingData = await Grading.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: gradingData.length,
            data: gradingData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching grading data',
            error: error.message
        });
    }
};

// ========== UPDATED: SINGLE NEEDLE CONTROLLERS ==========
exports.createSingleNeedle = async (req, res) => {
    try {
        console.log('Batch Audit Form Data Received:', req.body);
        
        // Validate required fields
        const requiredFields = ['buyerName', 'locationName', 'poNumber', 'color', 'itemStyle', 
                               'quantityOrderedCTN', 'quantityAvailableCTN', 'lotSize', 'inspectorName'];
        
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({
                    success: false,
                    message: `${field} is required`
                });
            }
        }
        
        const singleNeedleData = new SingleNeedle(req.body);
        const savedData = await singleNeedleData.save();
        
        console.log('Batch Audit record saved successfully:', savedData._id);
        
        res.status(201).json({
            success: true,
            message: 'Batch Audit form submitted successfully',
            data: savedData
        });
    } catch (error) {
        console.error('Error saving Batch Audit form:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting Batch Audit form',
            error: error.message
        });
    }
};

exports.getAllSingleNeedle = async (req, res) => {
    try {
        const singleNeedleData = await SingleNeedle.find().sort({ createdAt: -1 });
        
        // Add formType for AllDataView compatibility
        const dataWithFormType = singleNeedleData.map(item => ({
            ...item._doc,
            formType: 'single-needle'
        }));
        
        res.status(200).json({
            success: true,
            count: singleNeedleData.length,
            data: dataWithFormType
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching Batch Audit data',
            error: error.message
        });
    }
};

// ========== GET BY ID CONTROLLERS (add if missing) ==========
exports.getCuttingById = async (req, res) => {
    try {
        const cuttingData = await Cutting.findById(req.params.id);
        if (!cuttingData) {
            return res.status(404).json({
                success: false,
                message: 'Cutting data not found'
            });
        }
        res.status(200).json({
            success: true,
            data: cuttingData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching cutting data',
            error: error.message
        });
    }
};

exports.getSingleNeedleById = async (req, res) => {
    try {
        const singleNeedleData = await SingleNeedle.findById(req.params.id);
        if (!singleNeedleData) {
            return res.status(404).json({
                success: false,
                message: 'Batch Audit record not found'
            });
        }
        res.status(200).json({
            success: true,
            data: singleNeedleData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching Batch Audit record',
            error: error.message
        });
    }
};

// ========== UPDATE CONTROLLERS (unchanged) ==========
exports.updateCutting = async (req, res) => {
    try {
        const updatedData = await Cutting.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.status(200).json({
            success: true,
            message: 'Cutting data updated successfully',
            data: updatedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating cutting data',
            error: error.message
        });
    }
};

exports.updatePacking = async (req, res) => {
    try {
        const updatedData = await Packing.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.status(200).json({
            success: true,
            message: 'Packing data updated successfully',
            data: updatedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating packing data',
            error: error.message
        });
    }
};

exports.updateOverlock = async (req, res) => {
    try {
        const updatedData = await Overlock.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.status(200).json({
            success: true,
            message: 'Overlock data updated successfully',
            data: updatedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating overlock data',
            error: error.message
        });
    }
};

exports.updateGrading = async (req, res) => {
    try {
        const updatedData = await Grading.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        res.status(200).json({
            success: true,
            message: 'Grading data updated successfully',
            data: updatedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating grading data',
            error: error.message
        });
    }
};

exports.updateSingleNeedle = async (req, res) => {
    try {
        const updatedData = await SingleNeedle.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!updatedData) {
            return res.status(404).json({
                success: false,
                message: 'Batch Audit record not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Batch Audit record updated successfully',
            data: updatedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating Batch Audit record',
            error: error.message
        });
    }
};

// ========== DELETE CONTROLLERS (unchanged) ==========
exports.deleteCutting = async (req, res) => {
    try {
        await Cutting.findByIdAndDelete(req.params.id);
        res.status(200).json({ 
            success: true, 
            message: "Cutting record deleted successfully" 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

exports.deletePacking = async (req, res) => {
    try {
        await Packing.findByIdAndDelete(req.params.id);
        res.status(200).json({ 
            success: true, 
            message: "Packing record deleted successfully" 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

exports.deleteOverlock = async (req, res) => {
    try {
        await Overlock.findByIdAndDelete(req.params.id);
        res.status(200).json({ 
            success: true, 
            message: "Overlock record deleted successfully" 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

exports.deleteGrading = async (req, res) => {
    try {
        await Grading.findByIdAndDelete(req.params.id);
        res.status(200).json({ 
            success: true, 
            message: "Grading record deleted successfully" 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

exports.deleteSingleNeedle = async (req, res) => {
    try {
        await SingleNeedle.findByIdAndDelete(req.params.id);
        res.status(200).json({ 
            success: true, 
            message: "Batch Audit record deleted successfully" 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};