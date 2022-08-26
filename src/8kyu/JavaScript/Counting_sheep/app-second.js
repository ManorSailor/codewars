// Clever | Second attempt
function countSheeps(arrayOfSheep) {
    // join array, replace everything but t from the array, split it back into an array, access length
    return arrayOfSheep.join('').replace(/[^t]/gi, '').split('').length;
}