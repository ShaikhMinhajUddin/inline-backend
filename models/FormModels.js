const mongoose = require('mongoose');

// Cutting Form Schema
const cuttingSchema = new mongoose.Schema({
    // Basic Information
    buyerName: { type: String, required: true },
    item: { type: String, required: true },
    pp: { type: String, required: true },
    size: { type: String, required: true },
    date: { type: Date, default: Date.now },
    department: { type: String, required: true },
    totalCuttingPcs: { type: Number, required: true },
    color: { type: String },
    
    // Table and Quality
    tableNo: { type: String },
    cuttingFault: { type: Number, default: 0 },
    weavingFault: { type: Number, default: 0 },
    dyeingFault: { type: Number, default: 0 },
    bleachingFault: { type: Number, default: 0 },
    
    // Additional Details
    ribbonHemBorder: { type: String },
    checkPcs: { type: Number },
    totalFaultPcs: { type: Number, default: 0 },
    remarks: { type: String },
    
    // Metadata
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String }
});

// Packing Form Schema
const packingSchema = new mongoose.Schema({
    // Basic Information
    department: { type: String, required: true },
    date: { type: Date, default: Date.now },
    buyer: { type: String, required: true },
    poNo: { type: String, required: true },
    
    // Size Information
    reqSize: { type: String },
    rcvdSize: { type: String },
    reqWeight: { type: Number },
    rcvdWeight: { type: Number },
    
    // Counter Grading Section
    counterGrading: {
        foldingCond: { type: String },
        checkPcs: { type: Number },
        natureOfFault: { type: String },
        major: { type: Number, default: 0 },
        minor: { type: Number, default: 0 },
        remarks: { type: String }
    },
    
    // Packing Inspection Section
    packingInspection: {
        barcode: { type: String },
        incorFolding: { type: String },
        tagPins: { type: String },
        variationInSize: { type: String },
        colorVariation: { type: String },
        assortment: { type: String },
        damageCarton: { type: Boolean, default: false },
        ctnSize: { type: String }
    },
    
    // Metadata
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: String }
});

// Stitching (Overlock) Form Schema
const overlockSchema = new mongoose.Schema({
    // Factory Information
    factoryUnit: { type: String, required: true },
    ppNo: { type: String, required: true },
    date: { type: Date, default: Date.now },
    department: { type: String, required: true },
    
    // Machine Details
    mcNo: { type: String, required: true },
    inspectionRound: { type: String, required: true },
    time: { type: String },
    
    // Product Information
    buyerName: { type: String, required: true },
    articleName: { type: String, required: true },
    size: { type: String, required: true },
    colour: { type: String, required: true },
    spi: { type: String },
    
    // Defects
    jumpStitch: { type: Boolean, default: false },
    slipStitch: { type: Boolean, default: false },
    rawEdge: { type: Boolean, default: false },
    excessFabric: { type: Boolean, default: false },
    looseStitch: { type: Boolean, default: false },
    brokenStitch: { type: Boolean, default: false },
    
    // Label Issues
    missLabel: { type: Boolean, default: false },
    slantLabel: { type: Boolean, default: false },
    incureLabel: { type: Boolean, default: false },
    
    // Other Issues
    oilStain: { type: Boolean, default: false },
    dustMark: { type: Boolean, default: false },
    poorShape: { type: Boolean, default: false },
    threadLock: { type: Boolean, default: false },
    
    // Quality Check
    checkPcs: { type: Number, required: true },
    totalDefects: { type: Number, default: 0 },
    remarks: { type: String },
    
    createdAt: { type: Date, default: Date.now }
});

// Grading Form Schema
const gradingSchema = new mongoose.Schema({
    department: { type: String, required: true },
    ppNo: { type: String, required: true },
    qcName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    grader: { type: String, required: true },
    idNo: { type: String, required: true },
    customer: { type: String, required: true },
    
    // Inspection Results
    inspection: { type: Number, required: true },
    pass: { type: Number, required: true },
    fail: { type: Number, required: true },
    
    // Major Defects (A to Y)
    majorDefects: {
        A: { type: Number, default: 0 },
        B: { type: Number, default: 0 },
        C: { type: Number, default: 0 },
        D: { type: Number, default: 0 },
        E: { type: Number, default: 0 },
        F: { type: Number, default: 0 },
        G: { type: Number, default: 0 },
        H: { type: Number, default: 0 },
        I: { type: Number, default: 0 },
        J: { type: Number, default: 0 },
        K: { type: Number, default: 0 },
        L: { type: Number, default: 0 },
        M: { type: Number, default: 0 },
        N: { type: Number, default: 0 },
        O: { type: Number, default: 0 },
        P: { type: Number, default: 0 },
        Q: { type: Number, default: 0 },
        R: { type: Number, default: 0 },
        S: { type: Number, default: 0 },
        T: { type: Number, default: 0 },
        U: { type: Number, default: 0 },
        V: { type: Number, default: 0 },
        W: { type: Number, default: 0 },
        X: { type: Number, default: 0 },
        Y: { type: Number, default: 0 }
    },
    
    // Minor Defects
    minorDefects: {
        B: { type: Number, default: 0 },
        Q: { type: Number, default: 0 },
        J: { type: Number, default: 0 }
    },
    
    createdAt: { type: Date, default: Date.now }
});

// Stitching (Single Needle) Form Schema
// Stitching (Single Needle) Form Schema - UPDATED VERSION
const singleNeedleSchema = new mongoose.Schema({
    // Basic Information
    date: { type: Date, default: Date.now },
    buyerName: { type: String, required: true },
    locationName: { type: String, required: true },
    poNumber: { type: String, required: true },
    description: String,
    color: { type: String, required: true },
    itemStyle: { type: String, required: true },
    casePack: String,
    
    // Quantity Information
    quantityOrderedCTN: { type: Number, required: true },
    quantityAvailableCTN: { type: Number, required: true },
    balanceQuantityCTN: Number,
    balanceQuantityPcs: Number,
    cartonMeasurement: String,
    
    // AQL Information
    aqlLevel: { type: String, default: '2.5' },
    lotSize: { type: Number, required: true },
    status: String,
    sampleSize: Number,
    
    // Inspection Conclusion
    measurementConfirm: Boolean,
    onsiteCheckConfirm: Boolean,
    packingCheckConfirm: Boolean,
    visualCheckConfirm: Boolean,
    
    // Accepted Defects
    acceptedMajorCutting: Number,
    acceptedMinorCutting: Number,
    acceptedMajorStitching: Number,
    acceptedMinorStitching: Number,
    acceptedMajorPacking: Number,
    acceptedMinorPacking: Number,
    
    // Total Faults
    totalMajorFaults: Number,
    totalMinorFaults: Number,
    packingDescription: String,
    
    // Packing Inspection (Major/Minor)
    cartonMarksIncorrectMajor: Boolean,
    cartonMarksIncorrectMinor: Boolean,
    poorCartonQualityMajor: Boolean,
    poorCartonQualityMinor: Boolean,
    cartonSizeOutOfSpecMajor: Boolean,
    cartonSizeOutOfSpecMinor: Boolean,
    incorrectAssortmentMajor: Boolean,
    incorrectAssortmentMinor: Boolean,
    missingBlisterMajor: Boolean,
    missingBlisterMinor: Boolean,
    mixedShadeMajor: Boolean,
    mixedShadeMinor: Boolean,
    missingHangTagMajor: Boolean,
    missingHangTagMinor: Boolean,
    wrongHangTagMajor: Boolean,
    wrongHangTagMinor: Boolean,
    defectedHangTagMajor: Boolean,
    defectedHangTagMinor: Boolean,
    otherPackingMajor: Boolean,
    otherPackingMinor: Boolean,
    otherPackingDescription: String,
    
    // Measurement & Weight
    measurementOutOfToleranceMajor: Boolean,
    measurementOutOfToleranceMinor: Boolean,
    weightOutOfToleranceMajor: Boolean,
    weightOutOfToleranceMinor: Boolean,
    
    // Defects Description
    weavingFaultsMajor: Boolean,
    weavingFaultsMinor: Boolean,
    stainsDirtOilMajor: Boolean,
    stainsDirtOilMinor: Boolean,
    stitchingFaultsMajor: Boolean,
    stitchingFaultsMinor: Boolean,
    stitchOnPileMajor: Boolean,
    stitchOnPileMinor: Boolean,
    mixingYarnMajor: Boolean,
    mixingYarnMinor: Boolean,
    labelingFaultsMajor: Boolean,
    labelingFaultsMinor: Boolean,
    wrongLabelPlacementMajor: Boolean,
    wrongLabelPlacementMinor: Boolean,
    dyeingSpotsMajor: Boolean,
    dyeingSpotsMinor: Boolean,
    lesserMajor: Boolean,
    lesserMinor: Boolean,
    streaksMajor: Boolean,
    streaksMinor: Boolean,
    yarnFlyMajor: Boolean,
    yarnFlyMinor: Boolean,
    yarnContaminationMajor: Boolean,
    yarnContaminationMinor: Boolean,
    untrimmedThreadsMajor: Boolean,
    untrimmedThreadsMinor: Boolean,
    otherDefectsMajor: Boolean,
    otherDefectsMinor: Boolean,
    otherDefectsDescription: String,
    
    // Remarks
    remarks: String,
    
    // Final Status
    pass: Boolean,
    fail: Boolean,
    pending: Boolean,
    abortedTrip: Boolean,
    
    // Additional Information
    inspectorName: { type: String, required: true },
    inspectionDate: { type: Date, default: Date.now },
    houseKeeping: Boolean,
    lighting: Boolean,
    brokenNeedle: Boolean,
    
    // Old fields (keep for backward compatibility)
    factoryUnit: String,
    ppNo: String,
    department: String,
    mcNo: String,
    time: String,
    articleName: String,
    size: String,
    spi: String,
    
    // Old defects (keep for backward compatibility)
    openCorner: Boolean,
    insecureCorner: Boolean,
    hemAlter: Boolean,
    ribbonAlter: Boolean,
    incureLabel: Boolean,
    slantLabel: Boolean,
    missLabel: Boolean,
    jumpStitch: Boolean,
    rawEdge: Boolean,
    stitchOnPile: Boolean,
    oilStain: Boolean,
    dustMark: Boolean,
    checkPcs: Number,
    totalDefects: Number,
    
    // Metadata
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Create Models
const Cutting = mongoose.model('Cutting', cuttingSchema);
const Packing = mongoose.model('Packing', packingSchema);
const Overlock = mongoose.model('Overlock', overlockSchema);
const Grading = mongoose.model('Grading', gradingSchema);
const SingleNeedle = mongoose.model('SingleNeedle', singleNeedleSchema);

module.exports = {
    Cutting,
    Packing,
    Overlock,
    Grading,
    SingleNeedle
};