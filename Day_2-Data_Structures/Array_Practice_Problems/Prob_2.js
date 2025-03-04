function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestSmallestSorted(arr) {
    if (arr.length < 2) {
        return { secondMin: null, secondMax: null }; // Handle case where there aren't enough numbers
    }

    arr.sort((a, b) => a - b);
    return {
        secondMin: arr[1],
        secondMax: arr[arr.length - 2]
    };
}

let numbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", numbers);

let sortedResult = findSecondLargestSmallestSorted([...numbers]);
console.log("After Sorting:", [...numbers].sort((a, b) => a - b));
console.log("2nd Largest:", sortedResult.secondMax, "2nd Smallest:", sortedResult.secondMin);
