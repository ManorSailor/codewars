// First Attempt
function longestConsec(strarr, k) {
    // Basic Constraints
    if (strarr.length === 0 || k <= 0 || k > strarr.length) return '';

    // Map each str with the next k consecutive str & concatenate them
    strarr = strarr.map((str, index) => strarr.slice(index, index + k).join(''));

    // Find the longest str from the new str array
    return strarr.reduce((longestStr, str) => {
        if (str.length > longestStr.length) longestStr = str;
        return longestStr;
    }, '');
}