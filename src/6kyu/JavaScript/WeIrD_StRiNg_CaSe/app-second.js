// Clever | Second Attempt
function toWeirdCase(string) {
    // Map over each word, map over each char of the word, if even uppercase it, otherwise, return char.
    // Join the returned array without spaces Overwrite the original string, it will contain array of words
    // Join the array of words with spaces before returning, i.e, convert it to a string
    return string.split(' ').map(word => {
        return [...word].map((char, index) => (index % 2 === 0) ? char.toUpperCase() : char).join('');
    }).join(' ');
}