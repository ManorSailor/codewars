// Best Practice | First Attempt
function solution(input, markers) {
    markers = new RegExp(`\\s*[${markers.join('')}]+(?:.*)\\n?$`, 'gm');
    return input.replace(markers, '');
};

// Regex Breakdown
// \s* Match 0 or more no. of whitespace
// [markers]+ match at least one or more from the list
// (?:.*) match anything & everything except line terminators
// \n?$ match anything ending with zero or one newline terminator