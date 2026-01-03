// controllers/formController.js - UPDATED FOR NEW FIELDS
const { Cutting, Packing, Overlock, Grading, SingleNeedle } = require('../models/FormModels');

// ========== CREATE FORM CONTROLLERS ==========

exports.createCutting = async (req, res) => {
    try {
        console.log('📤 Creating cutting data:', req.body);
        const cuttingData = new Cutting(req.body);
        const savedData = await cuttingData.save();
        res.status(201).json({
            success: true,
            message: 'Cutting form submitted successfully',
            data: savedData
        });
    } catch (error) {
        console.error('❌ Error creating cutting:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting cutting form',
            error: error.message
        });
    }
};

exports.createPacking = async (req, res) => {
    try {
        console.log('📤 Creating packing data:', req.body);
        const packingData = new Packing(req.body);
        const savedData = await packingData.save();
        res.status(201).json({
            success: true,
            message: 'Packing form submitted successfully',
            data: savedData
        });
    } catch (error) {
        console.error('❌ Error creating packing:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting packing form',
            error: error.message
        });
    }
};

exports.createOverlock = async (req, res) => {
    try {
        console.log('📤 Creating overlock data:', req.body);
        const overlockData = new Overlock(req.body);
        const savedData = await overlockData.save();
        res.status(201).json({
            success: true,
            message: 'Overlock form submitted successfully',
            data: savedData
        });
    } catch (error) {
        console.error('❌ Error creating overlock:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting overlock form',
            error: error.message
        });
    }
};

exports.createGrading = async (req, res) => {
    try {
        console.log('📤 Creating grading data:', req.body);
        const gradingData = new Grading(req.body);
        const savedData = await gradingData.save();
        res.status(201).json({
            success: true,
            message: 'Grading form submitted successfully',
            data: savedData
        });
    } catch (error) {
        console.error('❌ Error creating grading:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting grading form',
            error: error.message
        });
    }
};

exports.createSingleNeedle = async (req, res) => {
    try {
        console.log('📤 Creating single needle data:', req.body);
        
        // Transform data for new schema with proper field mapping
        const transformedData = {
            // Date fields - REQUIRED
            Year: req.body.Year || new Date().getFullYear(),
            Month: req.body.Month || new Date().getMonth() + 1,
            Date: req.body.Date || new Date().getDate(),
            
            // Unit and department - REQUIRED
            Unit: req.body.Unit || 'Not Specified',
            Department: req.body.Department || 'Not Specified',
            
            // QA and customer details - REQUIRED
            QAName: req.body.QAName || 'Not Specified',
            Customer: req.body.Customer || 'Not Specified',
            PPNo: req.body.PPNo || 'Not Specified',
            
            // Product details - REQUIRED
            Item: req.body.Item || 'Not Specified',
            Size: req.body.Size || '',
            
            // Quantity information
            ReadyCartons: Number(req.body.ReadyCartons) || 0,
            ReadyPacksPcs: Number(req.body.ReadyPacksPcs) || 0,
            TotalInspection: Number(req.body.TotalInspection) || 0,
            SampleSize: Number(req.body.SampleSize) || 0,
            
            // Quality metrics
            MAJORFOUND: Number(req.body.MAJORFOUND) || 0,
            MINORFOUND: Number(req.body.MINORFOUND) || 0,
            OQLPercentMajor: Number(req.body.OQLPercentMajor) || 0,
            PASS: Number(req.body.PASS) || 0,
            FAIL: Number(req.body.FAIL) || 0,
            FailureReason: req.body.FailureReason || '',
            
            // Defects - Stitching
            SkipJumpStitch: Number(req.body.SkipJumpStitch) || 0,
            SlipStitch: Number(req.body.SlipStitch) || 0,
            RunoffStitch: Number(req.body.RunoffStitch) || 0,
            BrokenStitch: Number(req.body.BrokenStitch) || 0,
            
            // Defects - Construction
            OpenInsecureCorner: Number(req.body.OpenInsecureCorner) || 0,
            RawEdge: Number(req.body.RawEdge) || 0,
            
            // Defects - Labeling
            MissingLabel: Number(req.body.MissingLabel) || 0,
            InsecureLabel: Number(req.body.InsecureLabel) || 0,
            WrongLabel: Number(req.body.WrongLabel) || 0,
            SlantLabel: Number(req.body.SlantLabel) || 0,
            
            // Defects - General
            StainDirtMark: Number(req.body.StainDirtMark) || 0,
            UncutThread: Number(req.body.UncutThread) || 0,
            PulledPile: Number(req.body.PulledPile) || 0,
            Weaving: Number(req.body.Weaving) || 0,
            OverlapExcessFabric: Number(req.body.OverlapExcessFabric) || 0,
            SizeVariation: Number(req.body.SizeVariation) || 0,
            ShadeVariation: Number(req.body.ShadeVariation) || 0,
            DamageFabric: Number(req.body.DamageFabric) || 0,
            YarnContamination: Number(req.body.YarnContamination) || 0,
            StitchOnPile: Number(req.body.StitchOnPile) || 0,
            Pleats: Number(req.body.Pleats) || 0,
            PoorShape: Number(req.body.PoorShape) || 0,
            DirtMarkStain: Number(req.body.DirtMarkStain) || 0,
            SingleUntrimmedThread: Number(req.body.SingleUntrimmedThread) || 0,
            YarnContamination2: Number(req.body.YarnContamination2) || 0,
            LASSAR: Number(req.body.LASSAR) || 0,
            
            // Keep original createdAt
            createdAt: new Date()
        };
        
        console.log('📝 Transformed Data:', transformedData);
        
        const singleNeedleData = new SingleNeedle(transformedData);
        const savedData = await singleNeedleData.save();
        
        console.log('✅ Single Needle saved successfully:', savedData._id);
        
        res.status(201).json({
            success: true,
            message: 'Single Needle inspection submitted successfully',
            data: savedData
        });
    } catch (error) {
        console.error('❌ Error creating single needle:', error);
        console.error('❌ Full error:', {
            name: error.name,
            message: error.message,
            errors: error.errors,
            code: error.code,
            stack: error.stack
        });
        
        res.status(500).json({
            success: false,
            message: 'Error submitting Single Needle form',
            error: error.message,
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

// ========== GET BY ID CONTROLLERS ==========

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
        console.error('❌ Error getting cutting by id:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching cutting data',
            error: error.message
        });
    }
};

exports.getPackingById = async (req, res) => {
    try {
        const packingData = await Packing.findById(req.params.id);
        if (!packingData) {
            return res.status(404).json({
                success: false,
                message: 'Packing data not found'
            });
        }
        res.status(200).json({
            success: true,
            data: packingData
        });
    } catch (error) {
        console.error('❌ Error getting packing by id:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching packing data',
            error: error.message
        });
    }
};

exports.getOverlockById = async (req, res) => {
    try {
        const overlockData = await Overlock.findById(req.params.id);
        if (!overlockData) {
            return res.status(404).json({
                success: false,
                message: 'Overlock data not found'
            });
        }
        res.status(200).json({
            success: true,
            data: overlockData
        });
    } catch (error) {
        console.error('❌ Error getting overlock by id:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching overlock data',
            error: error.message
        });
    }
};

exports.getGradingById = async (req, res) => {
    try {
        const gradingData = await Grading.findById(req.params.id);
        if (!gradingData) {
            return res.status(404).json({
                success: false,
                message: 'Grading data not found'
            });
        }
        res.status(200).json({
            success: true,
            data: gradingData
        });
    } catch (error) {
        console.error('❌ Error getting grading by id:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching grading data',
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
                message: 'Single Needle inspection not found'
            });
        }
        res.status(200).json({
            success: true,
            data: singleNeedleData
        });
    } catch (error) {
        console.error('❌ Error getting single needle by id:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching Single Needle inspection',
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
                cutting: cutting,
                packing: packing,
                overlock: overlock,
                grading: grading,
                singleNeedle: singleNeedle
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
        console.error('❌ Error getting all forms data:', error);
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
        
        // Calculate quality score from all forms
        const totalInspections = grading.reduce((sum, item) => sum + (item.inspection || 0), 0);
        const totalPassed = grading.reduce((sum, item) => sum + (item.pass || 0), 0);
        const qualityScore = totalInspections > 0 ? Math.round((totalPassed / totalInspections) * 100) : 0;

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
        console.error('❌ Error getting dashboard stats:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching dashboard stats',
            error: error.message
        });
    }
};

// ========== GET ALL CONTROLLERS ==========
exports.getAllCutting = async (req, res) => {
    try {
        const cuttingData = await Cutting.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: cuttingData.length,
            data: cuttingData
        });
    } catch (error) {
        console.error('❌ Error getting all cutting:', error);
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
        console.error('❌ Error getting all packing:', error);
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
        console.error('❌ Error getting all overlock:', error);
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
        console.error('❌ Error getting all grading:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching grading data',
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
        console.error('❌ Error getting all single needle:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching Single Needle inspections',
            error: error.message
        });
    }
};

// ========== UPDATE CONTROLLERS ==========
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
        console.error('❌ Error updating cutting:', error);
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
        console.error('❌ Error updating packing:', error);
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
        console.error('❌ Error updating overlock:', error);
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
        console.error('❌ Error updating grading:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating grading data',
            error: error.message
        });
    }
};

exports.updateSingleNeedle = async (req, res) => {
    try {
        // Transform data for update
        const updateData = {
            Year: req.body.Year,
            Month: req.body.Month,
            Date: req.body.Date,
            Unit: req.body.Unit,
            Department: req.body.Department,
            QAName: req.body.QAName,
            Customer: req.body.Customer,
            PPNo: req.body.PPNo,
            Item: req.body.Item,
            Size: req.body.Size,
            ReadyCartons: req.body.ReadyCartons,
            ReadyPacksPcs: req.body.ReadyPacksPcs,
            TotalInspection: req.body.TotalInspection,
            SampleSize: req.body.SampleSize,
            MAJORFOUND: req.body.MAJORFOUND,
            MINORFOUND: req.body.MINORFOUND,
            OQLPercentMajor: req.body.OQLPercentMajor,
            PASS: req.body.PASS,
            FAIL: req.body.FAIL,
            FailureReason: req.body.FailureReason,
            SkipJumpStitch: req.body.SkipJumpStitch,
            SlipStitch: req.body.SlipStitch,
            RunoffStitch: req.body.RunoffStitch,
            BrokenStitch: req.body.BrokenStitch,
            OpenInsecureCorner: req.body.OpenInsecureCorner,
            RawEdge: req.body.RawEdge,
            MissingLabel: req.body.MissingLabel,
            InsecureLabel: req.body.InsecureLabel,
            WrongLabel: req.body.WrongLabel,
            SlantLabel: req.body.SlantLabel,
            StainDirtMark: req.body.StainDirtMark,
            UncutThread: req.body.UncutThread,
            PulledPile: req.body.PulledPile,
            Weaving: req.body.Weaving,
            OverlapExcessFabric: req.body.OverlapExcessFabric,
            SizeVariation: req.body.SizeVariation,
            ShadeVariation: req.body.ShadeVariation,
            DamageFabric: req.body.DamageFabric,
            YarnContamination: req.body.YarnContamination,
            StitchOnPile: req.body.StitchOnPile,
            Pleats: req.body.Pleats,
            PoorShape: req.body.PoorShape,
            DirtMarkStain: req.body.DirtMarkStain,
            SingleUntrimmedThread: req.body.SingleUntrimmedThread,
            YarnContamination2: req.body.YarnContamination2,
            LASSAR: req.body.LASSAR
        };
        
        const updatedData = await SingleNeedle.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        );
        
        if (!updatedData) {
            return res.status(404).json({
                success: false,
                message: 'Single Needle inspection not found'
            });
        }
        
        res.status(200).json({
            success: true,
            message: 'Single Needle inspection updated successfully',
            data: updatedData
        });
    } catch (error) {
        console.error('❌ Error updating single needle:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating Single Needle inspection',
            error: error.message
        });
    }
};

// ========== DELETE SINGLE CONTROLLERS ==========
exports.deleteCutting = async (req, res) => {
    try {
        await Cutting.findByIdAndDelete(req.params.id);
        res.status(200).json({ 
            success: true, 
            message: "Cutting record deleted successfully" 
        });
    } catch (error) {
        console.error('❌ Error deleting cutting:', error);
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
        console.error('❌ Error deleting packing:', error);
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
        console.error('❌ Error deleting overlock:', error);
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
        console.error('❌ Error deleting grading:', error);
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
            message: "Single Needle inspection deleted successfully" 
        });
    } catch (error) {
        console.error('❌ Error deleting single needle:', error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

// ========== DELETE ALL CONTROLLERS ==========

exports.deleteAllCutting = async (req, res) => {
    try {
        console.log('🔴 DELETE ALL CUTTING REQUEST RECEIVED');
        const result = await Cutting.deleteMany({});
        console.log('✅ DELETE ALL CUTTING SUCCESS:', result);
        res.status(200).json({
            success: true,
            message: `Deleted ${result.deletedCount} cutting records`,
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error('❌ DELETE ALL CUTTING ERROR:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting all cutting data',
            error: error.message
        });
    }
};

exports.deleteAllPacking = async (req, res) => {
    try {
        console.log('🔴 DELETE ALL PACKING REQUEST RECEIVED');
        const result = await Packing.deleteMany({});
        console.log('✅ DELETE ALL PACKING SUCCESS:', result);
        res.status(200).json({
            success: true,
            message: `Deleted ${result.deletedCount} packing records`,
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error('❌ DELETE ALL PACKING ERROR:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting all packing data',
            error: error.message
        });
    }
};

exports.deleteAllOverlock = async (req, res) => {
    try {
        console.log('🔴 DELETE ALL OVERLOCK REQUEST RECEIVED');
        const result = await Overlock.deleteMany({});
        console.log('✅ DELETE ALL OVERLOCK SUCCESS:', result);
        res.status(200).json({
            success: true,
            message: `Deleted ${result.deletedCount} overlock records`,
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error('❌ DELETE ALL OVERLOCK ERROR:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting all overlock data',
            error: error.message
        });
    }
};

exports.deleteAllGrading = async (req, res) => {
    try {
        console.log('🔴 DELETE ALL GRADING REQUEST RECEIVED');
        const result = await Grading.deleteMany({});
        console.log('✅ DELETE ALL GRADING SUCCESS:', result);
        res.status(200).json({
            success: true,
            message: `Deleted ${result.deletedCount} grading records`,
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error('❌ DELETE ALL GRADING ERROR:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting all grading data',
            error: error.message
        });
    }
};

exports.deleteAllSingleNeedle = async (req, res) => {
    try {
        console.log('🔴 DELETE ALL SINGLE NEEDLE REQUEST RECEIVED');
        const result = await SingleNeedle.deleteMany({});
        console.log('✅ DELETE ALL SINGLE NEEDLE SUCCESS:', result);
        res.status(200).json({
            success: true,
            message: `Deleted ${result.deletedCount} Single Needle inspections`,
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error('❌ DELETE ALL SINGLE NEEDLE ERROR:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting all Single Needle inspections',
            error: error.message
        });
    }
};