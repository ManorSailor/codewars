function zero(anon) { return (typeof(anon) === 'function') ? anon(0) : 0 }
function one(anon) { return (typeof(anon) === 'function') ? anon(1) : 1 }
function two(anon) { return (typeof(anon) === 'function') ? anon(2) : 2 }
function three(anon) { return (typeof(anon) === 'function') ? anon(3) : 3 }
function four(anon) { return (typeof(anon) === 'function') ? anon(4) : 4 }
function five(anon) { return (typeof(anon) === 'function') ? anon(5) : 5 }
function six(anon) { return (typeof(anon) === 'function') ? anon(6) : 6 }
function seven(anon) { return (typeof(anon) === 'function') ? anon(7) : 7 }
function eight(anon) { return (typeof(anon) === 'function') ? anon(8) : 8 }
function nine(anon) { return (typeof(anon) === 'function') ? anon(9) : 9 }

function plus(num) { return (a, b=num) => a + b }
function minus(num) { return (a, b=num) => a - b }
function times(num) { return (a, b=num) => a * b }
function dividedBy(num) { return (a, b=num) => (b === 0) ? 'Cannot divide by 0!' : Math.floor(a / b) }