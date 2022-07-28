// Best Practice | First Attempt
function count(string) {
    // If not a string, return
    if (typeof (string) !== 'string') return;

    // For each letter in the string, add the char to an obj if it doesn't exist & increment by 1
    return [...string].reduce((obj, char) => {
        if (!obj[char]) obj[char] = 0;
        obj[char]++;
        return obj;
    }, {});
}