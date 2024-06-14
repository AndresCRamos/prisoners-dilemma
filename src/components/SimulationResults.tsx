import React from "react";
import { PlayResult } from "../utils/simulation";

interface SimulationResultProps {
  result: PlayResult | null;
}

const SimulationResult: React.FC<SimulationResultProps> = ({ result }) => {
  if (result === null) {
    return <p>No results to display</p>;
  }

  return (
    <div>
      <h2>Simulation Results</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>Strategy 1 Move</th>
            <th>Strategy 2 Move</th>
            <th>Strategy 1 Points</th>
            <th>Strategy 2 Points</th>
          </tr>
        </thead>
        <tbody>
          {result.rounds.map((round) => (
            <tr key={round.round}>
              <td>{round.round}</td>
              <td>{round.strategy1Move ? "Cooperate" : "Defect"}</td>
              <td>{round.strategy2Move ? "Cooperate" : "Defect"}</td>
              <td>{round.strategy1Points}</td>
              <td>{round.strategy2Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Final Score</h3>
      <p>Strategy 1: {result.finalScore.strategy1}</p>
      <p>Strategy 2: {result.finalScore.strategy2}</p>
    </div>
  );
};

export default SimulationResult;
