function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Get a random number between 1 and 6
}

function simulateDieRolls() {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        rollCounts[roll]++;

        if (rollCounts[roll] === maxRolls) {
            reachedMax = true; // Stop when one number reaches 10 times
        }
    }

    console.log("Final Die Roll Counts:", rollCounts);

    let maxNum = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    let minNum = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

    console.log(`Number that appeared the most: ${maxNum} (${rollCounts[maxNum]} times)`);
    console.log(`Number that appeared the least: ${minNum} (${rollCounts[minNum]} times)`);
}

simulateDieRolls();
