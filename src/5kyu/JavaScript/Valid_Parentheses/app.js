// First Attempt
function validParentheses(parens) {
    // For some weird reason, when parens are empty we need to return true
    if (!parens.length) return true;

    // We only adding ( to tempArr And as soon as we encounter a ) in curItem, 
    // we pop off the lastItem from tempArr because it now makes a valid pair
    // reduce will return tempArr at the end & if it contains any ( at that point, 
    // it is clear no ) was found for it to make a valid pair, thus, the parens string in false
    parens = parens.split('').reduce((tempArr, curItem, i) => {
        const lastItem = tempArr.length - 1;
        if (curItem === ")" && tempArr[lastItem] === "(") {
            tempArr.pop();
        } else {
            tempArr.push(curItem);
        }
        return tempArr;
    }, []);

    return parens.length === 0;
}