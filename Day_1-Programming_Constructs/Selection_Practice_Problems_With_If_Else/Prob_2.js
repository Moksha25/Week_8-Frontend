function isWithinRange(day, month) {
    if ((month === 3 && day >= 20) || 
        (month === 4 && day >= 1 && day <= 30) || 
        (month === 5 && day >= 1 && day <= 31) || 
        (month === 6 && day <= 20)) {
        return true;
    }
    return false;
}

const args = process.argv.slice(2);
const day = parseInt(args[0]);
const month = parseInt(args[1]);

console.log(`Date: ${month}/${day} ->`, isWithinRange(day, month));