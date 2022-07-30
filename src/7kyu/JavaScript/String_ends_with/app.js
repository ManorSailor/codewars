// Best Practice (Opinionated?) | First Attempt
function solution(str, ending) {
  // We haven't been told if ending can be greater than str, if yes, return
  if (ending.length > str.length) return false;
  
  // str should END with ending. In other words, str should have exact no of 'ending' characters
  // includes() receives an optional arg which tells it to start looking from a specific index
  return (str.includes(ending, str.length - ending.length));
}