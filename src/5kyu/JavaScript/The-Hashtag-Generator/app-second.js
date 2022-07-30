// Second Attempt
function generateHashtag(str) {
    // Check if str is undefined or empty, return false
    if (!str || str === "") return false;

    // Trim trailing whitespace & replace one or more occurence of whitespace with a single whitespace
    str = str.trim().replace(/ +/g, ' ');

    // Check again if the string is empty, return false
    if (str === "") return false;

    // Split by words, uppercase the 1st letter & concatenate the rest of string. Join all of the words
    str = str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');

    // Add a hash on the front of str
    str = '#' + str;

    // If resulting str is > 140, return false, otherwise str
    return (str.length > 140) ? false : str;
}

// Get the string
// Check if str is empty or undefined, return false
// Trim trailing whitespace, remove extra whitespace with a single whitespace
// Check if string is empty, return false
// Split the string by words
// Make each word first letter uppercase, then join all of the words
// Add a hash in front of the resulting string
// If the resulting string is > 140, return false else return the hastag