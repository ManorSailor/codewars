// Second Attempt | Clever? 
function likes(names) {
    if (!names) return [];

    // Object literal acting as a switch statment here, lmao
    const nLikers = {
        0: 'no one likes this',
        1: `${names.slice(0)} likes this`,
        2: `${names.slice(0).join(' and ')} like this`,
        3: `${names.slice(0, 2).join(', ')} and ${names.slice(2)} like this`,
        'n': `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`,
    }

    // Unforunately, it doesn't support wildcard operator like switch, but hey my custom wildcard saves the day :P
    return (names.length > 3) ? nLikers['n'] : nLikers[names.length];
}