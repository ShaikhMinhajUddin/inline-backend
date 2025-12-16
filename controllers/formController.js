const { Cutting, Packing, Overlock, Grading, SingleNeedle } = require('../models/FormModels');

// ========== CUTTING FORM CONTROLLERS ==========
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

// ========== GET ALL FORMS DATA ==========
exports.getAllFormsData = async (req, res) => {
    try {
        const [cutting, packing, overlock, grading, singleNeedle] = await Promise.all([
            Cutting.find().sort({ createdAt: -1 }),
            Packing.find().sort({ createdAt: -1 }),
            Overlock.find().sort({ createdAt: -1 }),
            Grading.find().sort({ createdAt: -1 }),
            SingleNeedle.find().sort({ createdAt: -1 })
        ]);

        res.status(200).json({
            success: true,
            data: {
                cutting,
                packing,
                overlock,
                grading,
                singleNeedle
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

// ========== GET DASHBOARD STATISTICS ==========
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
        
        // Calculate quality scores (example logic)
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
                pendingReviews: 0 // You can add logic for this
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

// ========== PACKING FORM CONTROLLERS ==========
exports.createPacking = async (req, res) => {
    try {
        const packingData = new Packing(req.body);
        const savedData = await packingData.save();
        res.status(201).json({
            success: true,
            message: 'Packing form submitted successfully',
            data: savedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error submitting packing form',
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

// ========== OVERLOCK FORM CONTROLLERS ==========
exports.createOverlock = async (req, res) => {
    try {
        const overlockData = new Overlock(req.body);
        const savedData = await overlockData.save();
        res.status(201).json({
            success: true,
            message: 'Overlock form submitted successfully',
            data: savedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error submitting overlock form',
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

// ========== GRADING FORM CONTROLLERS ==========
exports.createGrading = async (req, res) => {
    try {
        const gradingData = new Grading(req.body);
        const savedData = await gradingData.save();
        res.status(201).json({
            success: true,
            message: 'Grading form submitted successfully',
            data: savedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error submitting grading form',
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

// ========== SINGLE NEEDLE FORM CONTROLLERS ==========
exports.createSingleNeedle = async (req, res) => {
    try {
        const singleNeedleData = new SingleNeedle(req.body);
        const savedData = await singleNeedleData.save();
        res.status(201).json({
            success: true,
            message: 'Single Needle form submitted successfully',
            data: savedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error submitting single needle form',
            error: error.message
        });
    }
};

exports.getAllSingleNeedle = async (req, res) => {
    try {
        const singleNeedleData = await SingleNeedle.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: singleNeedleData.length,
            data: singleNeedleData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching single needle data',
            error: error.message
        });
    }
};

// ========== UPDATE AND DELETE CONTROLLERS ==========
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
        res.status(200).json({
            success: true,
            message: 'Single Needle data updated successfully',
            data: updatedData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating single needle data',
            error: error.message
        });
    }
};

// ========== DELETE CONTROLLERS ==========
exports.deleteCutting = async (req, res) => {
    try {
        await Cutting.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Cutting deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deletePacking = async (req, res) => {
    try {
        await Packing.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Packing deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteOverlock = async (req, res) => {
    try {
        await Overlock.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Overlock deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteGrading = async (req, res) => {
    try {
        await Grading.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Grading deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteSingleNeedle = async (req, res) => {
    try {
        await SingleNeedle.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: "Single Needle deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
