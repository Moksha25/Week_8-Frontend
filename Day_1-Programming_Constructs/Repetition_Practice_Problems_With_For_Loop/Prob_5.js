function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(`Factorial of 5: ${factorial(5)}`);  // Output: 120
