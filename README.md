# Prisoner's Dilemma

This web application simulates the repeated Prisoner's Dilemma, where two players choose between cooperation and betrayal. In the classic dilemma, if both players cooperate, they receive a light sentence; if one betrays while the other cooperates, the betrayer goes free and the cooperator suffers a heavy sentence; and if both betray, they receive moderate sentences. This simulation allows you to observe how different strategies interact over multiple rounds.



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
- Nyedegger: Tries to maximize its own points, making a choice based on his own and the opponent last 3 moves, giving them a score and defecting depending on the score given
- Shubik: The player cooperates, until the opponent betrays them, then it defect for n moves, and starts cooperating again, if betrayed again, it defects for n + 1 moves
- Stein & Rapoport: Cooperates the first 5 moves, play Tit 4 Tat the next 10 moves, after this, it will check if the other player is playing randomly, if true, always defects, if not, it plays Tit 4 Tat. Will repeat the randomness check every 15 moves
- Random: Cooperates or defects randomly
- Tideman & Chieruzzi: Cooperates until opponent betrays it, then it defects for n moves and cooperates again, if betrayed again, will defect for n + 1 moves, if certain confitions are met, it will give its opponent a fresh start, forgetting everything up to that point, and cooperating for the next 2 rounds
- Tit 4 Tat: Imitates the movement the other strategy did in the last move
- Tullock: Cooperates the first 11 moves, then random cooperates, with a probability 10% less than his opponent on the last 10 moves

# Tech Stack
- Typescript
- React
- Vite
- Mantine
- Tailwind
- Math.js