// Clever | First Attempt
function isPangram(string) {
    // Replace each char which isn't an letter with nothing, we don't care about nums & other stuff
    // Convert the string to a set, we do this to have a unique collection of letters.
    // If their size is 26 which is the complete alphabets list, return true
    return new Set(string.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
}