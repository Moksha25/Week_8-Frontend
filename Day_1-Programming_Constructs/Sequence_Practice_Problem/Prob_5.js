let inches = 42;
let feet = inches / 12;
console.log("42 inches =", feet.toFixed(2), "feet");

let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048;

let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
console.log("Rectangular plot:", lengthMeters.toFixed(2), "m x", widthMeters.toFixed(2), "m");

let areaSinglePlotMeters = lengthMeters * widthMeters;
let totalAreaMeters = areaSinglePlotMeters * 25;
let metersToAcres = 0.000247105;

let totalAreaAcres = totalAreaMeters * metersToAcres;
console.log("Total area of 25 plots in acres:", totalAreaAcres.toFixed(4), "acres");