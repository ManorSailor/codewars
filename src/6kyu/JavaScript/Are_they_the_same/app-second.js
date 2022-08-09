// Second Attempt
function comp(roots, squares) {
    // If either of them are null or aren't of the same length, return false
    if (!roots || !squares || roots.length !== squares.length) return false;

    // Square each number of the array, sort the array
    roots = roots.map(root => root * root).sort();

    // Sort the squares array
    squares = squares.sort();

    // If every square of squares is equal to roots squared, return true
    return squares.every((square, i) => square === roots[i]);
}