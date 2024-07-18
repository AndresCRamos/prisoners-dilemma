# Prisoner's Dilemma

A simple web page that lets you test different strategies against each other on a repeated Prisoners's Dilema game

## Implemented strategies

- Always Cooperate: Always cooperates, no matter what
- Always Defect: Always defects, no matter what
- Davis: Cooperates the first 10 moves, then plays as Friedman
- Downing: Calculates the probability of the opponent to cooperate or defect, and makes a choice with the intent to maximize his own points in the long term
- Feld: Similar to Tit 4 Tat, but the cooperation probability decreases linearly, until the last round, with a cooperation probability of 50%
- Friedman: Cooperates until the opponent defects once, then always defects
- Graaskamp: Plays Tit 4 Tat the first 50 moves, defects on 51 and plays Tit 4 Tat until round 56, afterwards it checks if the opponent is random, if so, it always defects, it checks if the opponent is Tit 4 Tat or a clone, if so, it plays Tit 4 Tat, if not, always cooperates, with a random defection every 5 to 15 moves
- Grofman: Cooperates if the strategy and the opponent made the same move in the last turn, and if not, has a 28% of cooperating
- Joss: Similar to Tit 4 Tat, but it has a 90% chance of betrayal when the opponent cooperated on the last move
- Name withheld: Generates a random probability between 30% and 100% following a normal distribution, and makes a random choice with the generated probability
- Shubik: The player cooperates, until the opponent betrays them, then it defect for n moves, and starts cooperating again, if betrayed again, it defects for n + 1 moves
- Stein & rapoport: Cooperates the first 5 moves, play Tit 4 Tat the next 10 moves, after this, it will check if the other player is playing randomly, if true, always defects, if not, it plays Tit 4 Tat. Will repeat the randomness check every 15 moves
- Random: Cooperates or defects randomly
- Tit 4 Tat: Imitates the movement the other strategy did in the last move
- Tullock: Cooperates the first 11 moves, then randonmy cooperates, with a probability 10% less than his opponent on the alst 10 moves

# Not implemented strategies
- Nyedegger
- Tideman & Chieruzzi