function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    let palindromeNum = getPalindrome(num);

    console.log(`${num} is prime. Checking its palindrome: ${palindromeNum}`);

    if (isPrime(palindromeNum)) {
        console.log(`Palindrome ${palindromeNum} is also prime.`);
    } else {
        console.log(`Palindrome ${palindromeNum} is not prime.`);
    }
}

checkPrimeAndPalindrome(13);
checkPrimeAndPalindrome(17);  
checkPrimeAndPalindrome(23); 
checkPrimeAndPalindrome(10);  
