// First Attempt | O(b^a)
function arrayDiff(a, b) {
    // If b is empty or undefined, return a
    if (!b || !b.length) return a;

    // For Each element of a, compare it with each element of b
    // If they are the same, splice the array aka delete the value at position
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1);
                // i-- because after splicing the array, the position of each element in a will shift
                // It is possible that next element of a is also in b, & if we don't decrement i
                // i will increment & sort of skip the next element because its position was shifted after splicing
                // eg [1, 2, 2] [2] [1,2,2].splice(1, 1) => [1, 2]; i was 1 before the splice & 2 was at 1. Now the 3rd element
                // which is also 2 will shift to position 1, but our loop will increment to 2 & there is no 2 position after 2, so loop will end
                // That's why we need to decrease i after each splice so we can ensure that no element is skipped
                i--;
            }
        }
    }

    // If a is empty, return an empty array, otherwise return a
    return (!a.length) ? [] : a;
}