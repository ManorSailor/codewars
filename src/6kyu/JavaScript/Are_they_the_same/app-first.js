// Best Practice? | First Attempt
function comp(roots, squares) {
    // If either of them are null or aren't of the same length, return false
    if (!roots || !squares || roots.length !== squares.length) return false;

    // Square each number of the array, sort the array, convert into a string of numbers
    roots = roots.map(root => root * root).sort().join(' ');

    // Sort & convert into a string of numbers
    squares = squares.sort().join(' ');

    // If roots includes all of the squares, return true
    return roots.includes(squares);
}