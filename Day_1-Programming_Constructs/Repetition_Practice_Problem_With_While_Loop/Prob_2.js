function findMagicNumber(n) {
    let low = 1, high = 100;
    let mid;

    console.log(`Think of a number between 1 and 100. System will try to guess.`);

    while (low < high) {
        mid = Math.floor((low + high) / 2);

        let isLess = n < mid;

        if (isLess) {
            high = mid;
        } else {
            low = mid + 1; 
        }
    }
    
    console.log(`Your magic number is: ${low}`);
}

findMagicNumber(37);
