// Second Attempt | ES6 version of: https://www.codewars.com/kata/reviews/52774a314c2333f0a700068b/groups/53e0daa6a353ab9b8a00005e
function validParentheses(parens) {
    return parens.split('').reduce((counter, item) => {
        (item === "(") ? counter++ : counter--;
        return (counter < 0) ? false : counter;
    }, 0) === 0;
}