// First Attempt | O(n)
function DNAStrand(dna) {
    // Object of complimentary pairs
    const obj = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C',
    }
    // Spread the dna & reduce the array into a new str, accessing complimentary char for each char
    return [...dna].reduce((newDNA, char) => newDNA += obj[char], '');
}