let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100); // Random 3-digit number (100-999)
}
console.log("Generated Numbers:", numbers);

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Minimum Value:", min);
console.log("Maximum Value:", max);