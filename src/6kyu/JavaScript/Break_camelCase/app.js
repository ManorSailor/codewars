// Best Practice (Opinionated) | First attempt
function solution(string) {
  // if string doesn't exist, return
  if (!string) return;

  const isUpperCase = (char) => (char.charCodeAt() >= 65 && char.charCodeAt() <= 90);

  // Loop over each char, check if uppercase, add whitespace & char to newStr, otherwise add char to newStr
  return [...string].reduce((newStr, char) => (isUpperCase(char)) ? newStr += ' ' + char : newStr += char, '');
}