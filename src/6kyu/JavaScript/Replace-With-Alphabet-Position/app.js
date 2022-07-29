// Best Practice | First Attempt
function alphabetPosition(text) {
    // Spread the string chars ignoring case sentivity, if char isAlpha, get its ASCII code
    // Subtract 65 to make it 0 & add 1, because as per the description, a = 1. 
    // We subtract 65 because 65 = A  & we want to start 0 to 25 i.e, the total no. of alphabets
    return [...text.toUpperCase()].reduce((newStr, char) => {
        if (char >= 'A' && char <= 'Z') {
            newStr += (char.charCodeAt() - 65 + 1) + ' ';
        }
        return newStr;
    }, '').trim(); // Removes trailing whitespaces (if any)
}