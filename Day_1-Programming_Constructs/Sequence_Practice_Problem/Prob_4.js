let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 90) + 10);
}

let sum = numbers.reduce((acc, num) => acc + num, 0);

let average = sum / numbers.length;

console.log("Generated numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2));