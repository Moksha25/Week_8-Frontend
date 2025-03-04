function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestSmallest(arr) {
    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;

    for (let num of arr) {
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }

        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }
    }
    return { secondMax, secondMin };
}

// Generate random numbers
let numbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", numbers);

let result = findSecondLargestSmallest(numbers);
console.log("2nd Largest:", result.secondMax, "2nd Smallest:", result.secondMin);