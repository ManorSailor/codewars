function generateHashtag(str) {
    if (!str || str === "") return false;

    str = str.trim().replace(/ +/g, ' ');

    if (!str) return false;

    str = str.split(' ');

    str = str.map(word => {
        word = word.split('');
        const char = word[0].toUpperCase();
        word.shift();
        word.unshift(char);
        word = word.join('');
        return word;
    });

    str.unshift("#");
    str = str.join('');

    return (str.length > 140) ? false : str;
}

// Get the string
// Check if str is empty or undefined, return false
// Trim trailing whitespace, remove extra whitespace with a single whitespace
// Check if string is empty, return false
// Split the string by words
// Make each word first letter uppercase
// Add a hash in front
// If the resulting hashtag is > 140, return false else return the hastag