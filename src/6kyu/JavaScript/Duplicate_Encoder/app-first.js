function duplicateEncode(string) {
    const chars = string.toLowerCase().split('');

    return chars.reduce((encodedStr, char) => {
        if (charRepeats(char, chars)) {
            encodedStr += ')';
        } else {
            encodedStr += '(';
        }
        return encodedStr;
    }, '');
}

function charRepeats(char, charsArr) {
    let repeating = 0;

    for (const c of charsArr) {
        if (char == c) repeating++;
    }

    return (repeating > 1) ? true : false;
}

// Constraints:
// 1- The encoded string chars should appear in the same order as original string