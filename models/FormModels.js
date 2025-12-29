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
    
      // Defects (as quantities)
  brokenStitch: { type: Number, default: 0 },
  openCorner: { type: Number, default: 0 },
  slipStitch: { type: Number, default: 0 },
  skipStitch: { type: Number, default: 0 },
  looseStitch: { type: Number, default: 0 },
  openSeam: { type: Number, default: 0 },
  insecureCorner: { type: Number, default: 0 },
  stitchOnPile: { type: Number, default: 0 },
  rawEdge: { type: Number, default: 0 },
  missLabel: { type: Number, default: 0 },
  incureLabel: { type: Number, default: 0 },
  slantLabel: { type: Number, default: 0 },
  poorShape: { type: Number, default: 0 },
  barTagOpen: { type: Number, default: 0 },
  alter: { type: Number, default: 0 },
  ribbonAlter: { type: Number, default: 0 },
  jumpStitch: { type: Number, default: 0 },
  excesFabric: { type: Number, default: 0 },
  pukcering: { type: Number, default: 0 },
  runOffStitch: { type: Number, default: 0 },
  wrongThread: { type: Number, default: 0 },
  overlapFabric: { type: Number, default: 0 },
  damageFabric: { type: Number, default: 0 },
  weaving: { type: Number, default: 0 },
  dustMark: { type: Number, default: 0 },
  oilStain: { type: Number, default: 0 },
  ribbonGap: { type: Number, default: 0 },
  uncutThread: { type: Number, default: 0 },
  threadLock: { type: Number, default: 0 },
  loopPlacementOut: { type: Number, default: 0 },
    
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

// Stitching (Single Needle) Form Schema - UPDATED FOR TEXT FIELDS
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
    balanceQuantityCTN: { type: Number, default: 0 },
    balanceQuantityPcs: { type: Number, default: 0 },
    cartonMeasurement: String,
    
    // AQL Information
    aqlLevel: String,
    lotSize: { type: Number, required: true },
    status: String,
    sampleSize: { type: Number, default: 0 },
    acceptedMajor: { type: String, default: '' },
    acceptedMinor: { type: String, default: '' },
    acceptedCutting: { type: String, default: '' },
    acceptedStitching: { type: String, default: '' },
    acceptedPacking: { type: String, default: '' },
    totalFaultsMajor: { type: String, default: '' },
    totalFaultsMinor: { type: String, default: '' },
    packingDescription: String,
    
    // Inspection Conclusion - Changed from Boolean to String/Number
    measurementConfirm: { type: String, default: '' },
    onsiteCheckConfirm: { type: String, default: '' },
    packingCheckConfirm: { type: String, default: '' },
    visualCheckConfirm: { type: String, default: '' },
    
    // Packing Inspection - Changed from Boolean to String/Number
    cartonMarksIncorrectMajor: { type: String, default: '' },
    cartonMarksIncorrectMinor: { type: String, default: '' },
    poorCartonQualityMajor: { type: String, default: '' },
    poorCartonQualityMinor: { type: String, default: '' },
    cartonSizeOutOfSpecMajor: { type: String, default: '' },
    cartonSizeOutOfSpecMinor: { type: String, default: '' },
    incorrectAssortmentMajor: { type: String, default: '' },
    incorrectAssortmentMinor: { type: String, default: '' },
    missingBlisterMajor: { type: String, default: '' },
    missingBlisterMinor: { type: String, default: '' },
    mixedShadeMajor: { type: String, default: '' },
    mixedShadeMinor: { type: String, default: '' },
    missingHangTagMajor: { type: String, default: '' },
    missingHangTagMinor: { type: String, default: '' },
    wrongHangTagMajor: { type: String, default: '' },
    wrongHangTagMinor: { type: String, default: '' },
    defectedHangTagMajor: { type: String, default: '' },
    defectedHangTagMinor: { type: String, default: '' },
    otherPackingMajor: { type: String, default: '' },
    otherPackingMinor: { type: String, default: '' },
    otherPackingDescription: String,
    
    // Measurement & Weight - Changed from Boolean to String/Number
    measurementOutOfToleranceMajor: { type: String, default: '' },
    measurementOutOfToleranceMinor: { type: String, default: '' },
    weightOutOfToleranceMajor: { type: String, default: '' },
    weightOutOfToleranceMinor: { type: String, default: '' },
    
    // Defects Description - Changed from Boolean to String/Number
    weavingFaultsMajor: { type: String, default: '' },
    weavingFaultsMinor: { type: String, default: '' },
    stainsDirtOilMajor: { type: String, default: '' },
    stainsDirtOilMinor: { type: String, default: '' },
    stitchingFaultsMajor: { type: String, default: '' },
    stitchingFaultsMinor: { type: String, default: '' },
    stitchOnPileMajor: { type: String, default: '' },
    stitchOnPileMinor: { type: String, default: '' },
    mixingYarnMajor: { type: String, default: '' },
    mixingYarnMinor: { type: String, default: '' },
    labelingFaultsMajor: { type: String, default: '' },
    labelingFaultsMinor: { type: String, default: '' },
    wrongLabelPlacementMajor: { type: String, default: '' },
    wrongLabelPlacementMinor: { type: String, default: '' },
    dyeingSpotsMajor: { type: String, default: '' },
    dyeingSpotsMinor: { type: String, default: '' },
    lesserMajor: { type: String, default: '' },
    lesserMinor: { type: String, default: '' },
    streaksMajor: { type: String, default: '' },
    streaksMinor: { type: String, default: '' },
    yarnFlyMajor: { type: String, default: '' },
    yarnFlyMinor: { type: String, default: '' },
    yarnContaminationMajor: { type: String, default: '' },
    yarnContaminationMinor: { type: String, default: '' },
    untrimmedThreadsMajor: { type: String, default: '' },
    untrimmedThreadsMinor: { type: String, default: '' },
    otherDefectsMajor: { type: String, default: '' },
    otherDefectsMinor: { type: String, default: '' },
    otherDefectsDescription: String,
    
    // Remarks
    remarks: String,
    
    // Final Status - Changed from Boolean to String/Number
    pass: { type: String, default: '' },
    fail: { type: String, default: '' },
    pending: { type: String, default: '' },
    abortedTrip: { type: String, default: '' },
    
    // Additional Information
    inspectorName: { type: String, required: true },
    inspectionDate: { type: Date, default: Date.now },
    houseKeeping: { type: String, default: '' },
    lighting: { type: String, default: '' },
    brokenNeedle: { type: String, default: '' },
    
    // Old fields (keep for backward compatibility)
    factoryUnit: String,
    ppNo: String,
    department: String,
    mcNo: String,
    time: String,
    articleName: String,
    size: String,
    spi: String,
    
    // Old defects - Changed from Boolean to String/Number
    openCorner: { type: String, default: '' },
    insecureCorner: { type: String, default: '' },
    hemAlter: { type: String, default: '' },
    ribbonAlter: { type: String, default: '' },
    incureLabel: { type: String, default: '' },
    slantLabel: { type: String, default: '' },
    missLabel: { type: String, default: '' },
    jumpStitch: { type: String, default: '' },
    rawEdge: { type: String, default: '' },
    stitchOnPile: { type: String, default: '' },
    oilStain: { type: String, default: '' },
    dustMark: { type: String, default: '' },
    checkPcs: { type: Number, default: 0 },
    totalDefects: { type: Number, default: 0 },
    
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