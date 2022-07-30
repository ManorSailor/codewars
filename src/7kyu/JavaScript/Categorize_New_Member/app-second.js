// Best Practice | Second Attempt
// Thanks to: https://www.codewars.com/kata/reviews/5506c16fa11c0a0eef0000a3/groups/55fd43d97d94ac4d260000da
// Learned about a new syntax, i.e., Destructuring assignment operator 
function openOrSenior(data){
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open');
}