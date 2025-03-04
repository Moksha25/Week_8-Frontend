function getPlaceValue(num) {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        case 1000000: return "Ten Lakh";
        case 10000000: return "Crore";
        default: return "Invalid Number! Enter 1, 10, 100, 1000, etc.";
    }
}

const numbers = [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000];
let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

console.log(`Number: ${randomNumber}`);
console.log(`Place Value: ${getPlaceValue(randomNumber)}`);
