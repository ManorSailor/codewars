// Beginner Friendly | First Attempt
function pigIt(str){
  // Split str into words
  const words = str.split(' ');
  
  let newStr = [];
  
  words.forEach(word => {
    // Get the 1st char of word
    const char = word[0];
    
    // If the char is an alphabet
    if (isAlpha(char)) {
      word = word.slice(1); // Slice off the first letter of the word
      word += char + 'ay'; // Add the 1st letter & 'ay' to the end of the updated word
      newStr.push(word); // Push updated word to new array
    } else {
      newStr.push(word); // If not an alphabet, just store it as it is
    }
  });
  
  // Use join to convert the array into a string with whitespace
  return newStr.join(' ');
}

function isAlpha(char) {
  // Get the character ASCII code, ignoring case senstivity
  const charCode = char.toUpperCase().charCodeAt();
  
  // If charCode is between 65 & 90 inclusive, return true; return false
  return (charCode >= 65 && charCode <= 90);
}