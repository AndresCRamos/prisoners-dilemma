# Prisoner's Dilemma

A simple web page that lets you test different strategies against each other on a repeated Prisoners's Dilema game

## Implemented strategies

- Always Cooperate: Always cooperates, no matter what
- Always Defect: Always defects, no matter what
- Davis: Cooperates the first 10 moves, then plays as Friedman
- Feld: Similar to Tit 4 Tat, but the cooperation probability decreases linearly, until the last round, with a cooperation probability of 50%
- Friedman: Cooperates until the opponent defects once, then always defects
- Grofman: Cooperates if the strategy and the opponent made the same move in the last turn, and if not, has a 28% of cooperating
- Joss: Similar to Tit 4 Tat, but it has a 90% chance of betrayal when the opponent cooperated on the last move
- Name withheld: Generates a random probability between 30% and 100% following a normal distribution, and makes a random choice with the generated probability
- Stein & rapoport: Cooperates the first 5 moves, play Tit 4 Tat the next 10 moves, after this, it will check if the other player is playing randomly, if true, always defects, if not, it plays Tit 4 Tat. Will repeat the randomness check every 15 moves
- Random: Cooperates or defects randomly
- Tit 4 Tat: Imitates the movement the other strategy did in the last move

# Not implemented strategies
- Downing
- Graaskamp
- Nyedegger
- Shubik
- Tideman & Chieruzzi
- Tullock