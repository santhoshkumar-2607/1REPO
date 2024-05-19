// Define the groups of children
const groupA = ['A1', 'A2', 'A3'];
const groupB = ['B1', 'B2', 'B3'];
const groupC = ['C1', 'C2', 'C3'];

// Simple hash function (DJB2)
function hashString(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return hash >>> 0; // Convert to unsigned 32-bit integer
}

// Function to generate all combinations of selecting one child from each group
function generateCombinations(groupA, groupB, groupC) {
    const combinations = [];

    for (let i = 0; i < groupA.length; i++) {
        for (let j = 0; j < groupB.length; j++) {
            for (let k = 0; k < groupC.length; k++) {
                const combination = [groupA[i], groupB[j], groupC[k]];
                const combinationStr = JSON.stringify(combination);
                const id = hashString(combinationStr);
                combinations.push({ id, combination });
            }
        }
    }

    return combinations;
}

// Generate combinations
const allCombinations = generateCombinations(groupA, groupB, groupC);

// Display the results
console.log("ID\t\tCombination");
allCombinations.forEach(item => {
    console.log(`${item.id}\t${item.combination.join(", ")}`);
});

// let head=["12345","54321"]
// let body=["09876","67890"]
// function num (head,body)
// {

// }
// num(head,body)