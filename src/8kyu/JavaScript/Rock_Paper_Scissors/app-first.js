// First Attempt
const rps = (p1, p2) => {
  const winners = ['rock', 'paper', 'scissors'];
  const losers = ['scissors', 'rock', 'paper'];
  const p1Loser = losers[winners.indexOf(p1)];
  if (p1Loser === p2) return 'Player 1 won!';
  return (p1 !== p2) ? 'Player 2 won!' : 'Draw!';
};