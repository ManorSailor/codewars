// Best Practice (Opinionated) | First Attempt
function squareDigits(oldNum){
    // Get each digit by converting into a string & use the Spread syntax to make an iterable array
    const digits = [...oldNum.toString()];
    
    // Use array.reduce method to square each digit & append it to a variable of type String
    const newNum = digits.reduce((sum, digit) => sum += parseInt(digit) * parseInt(digit), '');
  
    // Return the newNumber after converting it into an integer
    return parseInt(newNum);
  }