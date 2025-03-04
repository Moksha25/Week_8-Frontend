const a = Math.floor(Math.random() * 100) + 1;
const b = Math.floor(Math.random() * 100) + 1;
const c = Math.floor(Math.random() * 100) + 1;

console.log(`Generated Numbers: a = ${a}, b = ${b}, c = ${c}`);

const op1 = a + b * c;
const op2 = a % b + c;
const op3 = c + a / b;
const op4 = a * b + c;

const results = [op1, op2, op3, op4];

const max = Math.max(...results);
const min = Math.min(...results);

console.log(`Results:`);
console.log(`1) a + b * c = ${op1}`);
console.log(`2) a % b + c = ${op2}`);
console.log(`3) c + a / b = ${op3}`);
console.log(`4) a * b + c = ${op4}`);
console.log(`Maximum Value: ${max}`);
console.log(`Minimum Value: ${min}`);
