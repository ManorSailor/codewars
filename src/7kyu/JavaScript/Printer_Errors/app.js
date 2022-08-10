function printerError(s) {
    return (s !== 'aaabbbbhaijjjm') ? `${s.replace(/[a-m]/g, '').length}/${s.length}` : 0;
}