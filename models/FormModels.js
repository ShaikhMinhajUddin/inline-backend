// models/FormModels.js - UPDATED WITH CORRECT FIELD NAMES
const mongoose = require('mongoose');

// Cutting Form Schema
const cuttingSchema = new mongoose.Schema({
    buyerName: { type: String, required: true },
    item: { type: String, required: true },
    pp: { type: String, required: true },
    size: { type: String, required: true },
    date: { type: Date, default: Date.now },
    department: { type: String, required: true },
    totalCuttingPcs: { type: Number, required: true },
    color: { type: String },
    tableNo: { type: String },
    cuttingFault: { type: Number, default: 0 },
    weavingFault: { type: Number, default: 0 },
    dyeingFault: { type: Number, default: 0 },
    bleachingFault: { type: Number, default: 0 },
    ribbonHemBorder: { type: String },
    checkPcs: { type: Number },
    totalFaultPcs: { type: Number, default: 0 },
    remarks: { type: String },
    createdAt: { type: Date, default: Date.now }
});

// Packing Form Schema
const packingSchema = new mongoose.Schema({
    department: { type: String, required: true },
    date: { type: Date, default: Date.now },
    buyer: { type: String, required: true },
    poNo: { type: String, required: true },
    reqSize: { type: String },
    rcvdSize: { type: String },
    reqWeight: { type: Number },
    rcvdWeight: { type: Number },
    counterGrading: {
        foldingCond: { type: String },
        checkPcs: { type: Number },
        natureOfFault: { type: String },
        major: { type: Number, default: 0 },
        minor: { type: Number, default: 0 },
        remarks: { type: String }
    },
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
    createdAt: { type: Date, default: Date.now }
});

// Overlock Form Schema
const overlockSchema = new mongoose.Schema({
    factoryUnit: { type: String },
    ppNo: { type: String },
    date: { type: Date, default: Date.now },
    department: { type: String },
    mcNo: { type: String },
    inspectionRound: { type: String },
    time: { type: String },
    buyerName: { type: String },
    articleName: { type: String },
    size: { type: String },
    colour: { type: String },
    spi: { type: Number, default: 0 },
    
    // All defects as numbers
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
    
    checkPcs: { type: Number, default: 0 },
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
    inspection: { type: Number, required: true },
    pass: { type: Number, required: true },
    fail: { type: Number, required: true },
    
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
    
    minorDefects: {
        B: { type: Number, default: 0 },
        Q: { type: Number, default: 0 },
        J: { type: Number, default: 0 }
    },
    
    createdAt: { type: Date, default: Date.now }
});

// Single Needle Form Schema - NEW FIELDS
const singleNeedleSchema = new mongoose.Schema({
    // Date fields - EXACT NAMES FROM FRONTEND
    Year: { type: Number, required: true, min: 2000, max: 2100 },
    Month: { type: Number, required: true, min: 1, max: 12 },
    Date: { type: Number, required: true, min: 1, max: 31 },
    
    // Unit and department
    Unit: { type: String, required: true },
    Department: { type: String, required: true },
    
    // QA and customer details
    QAName: { type: String, required: true },
    Customer: { type: String, required: true },
    PPNo: { type: String, required: true },
    
    // Product details
    Item: { type: String, required: true },
    Size: { type: String, default: '' },
    
    // Quantity information
    ReadyCartons: { type: Number, default: 0, min: 0 },
    ReadyPacksPcs: { type: Number, default: 0, min: 0 },
    TotalInspection: { type: Number, default: 0, min: 0 },
    SampleSize: { type: Number, default: 0, min: 0 },
    
    // Quality metrics - EXACT NAMES FROM FRONTEND
    MAJORFOUND: { type: Number, default: 0, min: 0 },
    MINORFOUND: { type: Number, default: 0, min: 0 },
    OQLPercentMajor: { type: Number, default: 0, min: 0, max: 100 },
    PASS: { type: Number, default: 0, min: 0 },
    FAIL: { type: Number, default: 0, min: 0 },
    FailureReason: { type: String, default: '' },
    
    // Defects - Stitching - EXACT NAMES FROM FRONTEND
    SkipJumpStitch: { type: Number, default: 0, min: 0 },
    SlipStitch: { type: Number, default: 0, min: 0 },
    RunoffStitch: { type: Number, default: 0, min: 0 },
    BrokenStitch: { type: Number, default: 0, min: 0 },
    
    // Defects - Construction
    OpenInsecureCorner: { type: Number, default: 0, min: 0 },
    RawEdge: { type: Number, default: 0, min: 0 },
    
    // Defects - Labeling
    MissingLabel: { type: Number, default: 0, min: 0 },
    InsecureLabel: { type: Number, default: 0, min: 0 },
    WrongLabel: { type: Number, default: 0, min: 0 },
    SlantLabel: { type: Number, default: 0, min: 0 },
    
    // Defects - General
    StainDirtMark: { type: Number, default: 0, min: 0 },
    UncutThread: { type: Number, default: 0, min: 0 },
    PulledPile: { type: Number, default: 0, min: 0 },
    Weaving: { type: Number, default: 0, min: 0 },
    OverlapExcessFabric: { type: Number, default: 0, min: 0 },
    SizeVariation: { type: Number, default: 0, min: 0 },
    ShadeVariation: { type: Number, default: 0, min: 0 },
    DamageFabric: { type: Number, default: 0, min: 0 },
    YarnContamination: { type: Number, default: 0, min: 0 },
    StitchOnPile: { type: Number, default: 0, min: 0 },
    Pleats: { type: Number, default: 0, min: 0 },
    PoorShape: { type: Number, default: 0, min: 0 },
    DirtMarkStain: { type: Number, default: 0, min: 0 },
    SingleUntrimmedThread: { type: Number, default: 0, min: 0 },
    YarnContamination2: { type: Number, default: 0, min: 0 },
    LASSAR: { type: Number, default: 0, min: 0 },
    
    createdAt: { type: Date, default: Date.now }
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