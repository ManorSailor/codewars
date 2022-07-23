// Best Practice (Opinionated) | Second Attempt
function filter_list(list) {
  // Filter the list as long as its not a type string
  return list.filter(item => typeof(item) !== 'string');
}