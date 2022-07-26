// Clever (Opinionated) | Second attempt
function squareDigits(oldNum) {
    // For each digit from array of String digits, square each digit
    // Join the resulting array into a string & return it. Don't forget to convert to Number!
    return Number([...oldNum.toString()].map(digit => digit ** 2).join(''));
  }