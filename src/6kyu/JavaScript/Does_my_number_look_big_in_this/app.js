function narcissistic(oldNum) {
    // Power is determined by the no. of digits present in the number
    const power = oldNum.toString().length;
    
    // Get the digits by converting it into a String & using the Spread operator to create an iterable array
    const digits = [...oldNum.toString()];
    
    // Use the array.reduce method to take sum of each digit after raising it to the power constant. Note: 0 initializes sum to 0
    const newNum = digits.reduce((sum, digit) => sum += parseInt(digit) ** power, 0);
    
    // If both numbers are the same, returns true, otherwise, returns false
    return (newNum === oldNum);
  }