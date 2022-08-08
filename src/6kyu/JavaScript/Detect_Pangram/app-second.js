// Best Practice? | Second Attempt
function isPangram(string) {
    // Convert to lowercase
    string = string.toLowerCase();

    // Check if its an alphabet
    const isAlpha = (letter) => (letter >= 'a' && letter <= 'z');

    // Create an object of letters
    const obj = [...string].reduce((obj, letter) => {
        if (isAlpha(letter)) obj[letter] = letter;
        return obj;
    }, {});

    // If obj has exactly 26 objects, return true
    return Object.keys(obj).length === 26;
}