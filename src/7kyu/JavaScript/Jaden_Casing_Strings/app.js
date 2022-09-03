// First Attempt | Best Practice
String.prototype.toJadenCase = function () {
    // Split by spaces, for each word take the first char, uppercase it & concat the rest of the word
    // join the returned words array by spaces, return new str
    return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};