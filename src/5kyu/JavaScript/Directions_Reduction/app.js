// First Attempt
function dirReduc(arr) {
    // Object containing opposite directions
    const oppDir = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    }

    // Need to use arr.length because we need updated length on each cycle
    for (let i = 0; i < arr.length; i++) {
        // If next direction is the same as current
        if (oppDir[arr[i + 1]] === arr[i]) {
            arr.splice(i, 2);
        }
        // If the previous direction is the same as current
        if (oppDir[arr[i - 1]] === arr[i]) {
            // i - 1 because if prev is same, we need to remove from last element upto current
            arr.splice(i - 1, 2);
            // Mutating the array affects the indices, and we don't want to skip checking any element
            // - 2 because we are deleting 2 elements above
            i -= 2;
        }
    }
    return arr;
}