function unitConversion(choice, value) {
    switch (choice) {
        case 1: return `${value} Feet = ${value * 12} Inches`;
        case 2: return `${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`;
        case 3: return `${value} Inches = ${(value / 12).toFixed(4)} Feet`;
        case 4: return `${value} Meters = ${(value * 3.28084).toFixed(4)} Feet`;
        default: return "Invalid choice! Choose between 1-4.";
    }
}

console.log(unitConversion(1, 5));
console.log(unitConversion(3, 24)); 