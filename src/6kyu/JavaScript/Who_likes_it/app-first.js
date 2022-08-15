// First Attempt
function likes(names) {
    if (!names.length) return 'no one likes this';
    else if (names.length === 1) return `${names.slice(0)} likes this`;
    else if (names.length === 2) return `${names.slice(0).join(' and ')} like this`;
    else if (names.length === 3) return `${names.slice(0, 2).join(', ')} and ${names.slice(2)} like this`;
    else if (names.length > 3) return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;
}