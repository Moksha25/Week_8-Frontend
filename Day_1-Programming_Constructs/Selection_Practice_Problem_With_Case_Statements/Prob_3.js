function placeValue(number) {
    switch (number) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        default: return "Invalid input! Enter 1, 10, 100, 1000, etc.";
    }
}

console.log(placeValue(100));