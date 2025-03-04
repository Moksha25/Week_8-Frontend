function isLeapYear(year) {
    if (year >= 1000 && year <= 9999) { 
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    return false; 
}

const year = parseInt(process.argv[2]);

console.log(`Year ${year} is`, isLeapYear(year) ? "a Leap Year" : "not a Leap Year");