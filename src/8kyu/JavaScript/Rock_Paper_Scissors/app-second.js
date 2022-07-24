// Best Practice | Second Attempt
const rps = (p1, p2) => {
    if (p1 === p2) return 'Draw!';
    // Following object literal defines winner & loser pairs of each game item
    const obj = {
        "rock": "scissors",
        "paper": 'rock',
        "scissors": "paper",
    }
    // obj[p1] means p1's loser/losing pair. p1 = rock; obj[p1] = obj['rock']; returns 'scissors'
    return (obj[p1] === p2) ? 'Player 1 won!' : 'Player 2 won!';
};