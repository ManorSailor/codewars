// Clever | Third Attempt
function comp(roots, squares) {
    // If either of them are null or aren't of the same length, return false
    if (!roots || !squares || roots.length !== squares.length) return false;

    // Square each number of the array, sort the new array, convert into a string of numbers
    roots = roots.map(root => root * root).sort().join(' ');

    // Create a roots regex pattern
    const regexp = new RegExp(roots, 'g');

    // Sort & convert into a string of numbers
    squares = squares.sort().join(' ');

    // Replace everything in squares with the created regex & if its 0, return true
    return squares.replace(regexp, '').length === 0;
}