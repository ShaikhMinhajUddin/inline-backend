// models/FormModels.js - FIXED OVERLOCK SCHEMA
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

// ✅ FIXED Overlock Form Schema - All fields as numbers
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
    
    // All defects as numbers (not booleans)
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

// Single Needle Form Schema
const singleNeedleSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    buyerName: { type: String },
    locationName: { type: String },
    poNumber: { type: String },
    description: String,
    color: { type: String },
    itemStyle: { type: String },
    casePack: String,
    quantityOrderedCTN: { type: Number, default: 0 },
    quantityAvailableCTN: { type: Number, default: 0 },
    balanceQuantityCTN: { type: Number, default: 0 },
    balanceQuantityPcs: { type: Number, default: 0 },
    cartonMeasurement: String,
    aqlLevel: String,
    lotSize: { type: Number, default: 0 },
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
    measurementConfirm: { type: String, default: '' },
    onsiteCheckConfirm: { type: String, default: '' },
    packingCheckConfirm: { type: String, default: '' },
    visualCheckConfirm: { type: String, default: '' },
    acceptedMajorCutting: { type: String, default: '' },
    acceptedMinorCutting: { type: String, default: '' },
    acceptedMajorStitching: { type: String, default: '' },
    acceptedMinorStitching: { type: String, default: '' },
    acceptedMajorPacking: { type: String, default: '' },
    acceptedMinorPacking: { type: String, default: '' },
    totalMajorFaults: { type: String, default: '' },
    totalMinorFaults: { type: String, default: '' },
    remarks: String,
    inspectorName: { type: String },
    inspectionDate: { type: Date, default: Date.now },
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