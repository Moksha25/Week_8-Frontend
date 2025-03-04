function harmonicNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    return sum.toFixed(4);  
}

console.log(`Harmonic Number (n=5): ${harmonicNumber(5)}`);