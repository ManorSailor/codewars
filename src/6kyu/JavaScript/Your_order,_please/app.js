// Best Practice | First Attempt
function order(str) {
    // If the string is empty, return empty string
    if (!str) return str;

    // Get positions from the string
    const positions = str.replace(/[^1-9]/g, '').split('');

    // Get words from the string
    const words = str.split(' ');

    // Create an object forming a tightly coupled relation between two arrays above
    // Note: JavaScript objects are sorted in ascending order by default 
    const sortedWords = words.reduce((obj, word, index) => {
        obj[positions[index]] = word;
        return obj;
    }, {});

    // Return the object values after joining them with spaces
    return Object.values(sortedWords).join(' ');
}