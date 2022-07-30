// Clever (Opinionated)
function getCount(str) {
  // Rest syntax to convert the return value into an array iterable & accessing the length property
  return [...str.matchAll(/[aeiou]/ig)].length;
}