// Clever | First Attempt
function persistence(num, count = 0) {
    // If num doesn't exist OR its not a number, return num
    if (!num || isNaN(num)) return num;

    // Convert the num to string
    num = num.toString();

    // If its length is 1, return count
    if (num.length === 1) return count;

    // Split the string into individual digits & reduce them down to the multiplicative sum
    num = num.split('').reduce((a, b) => a * b).toString();

    // While length of num array is not 1, keep calling persistence with num & pre-increment count by 1
    if (num.length !== 1) return persistence(num, ++count);

    // Pre-increment count before returning, we do that because count is always 1 less than the actual count
    return ++count;
}