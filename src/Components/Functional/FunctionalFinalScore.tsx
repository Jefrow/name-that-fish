import "./styles/final-score.css";
import { GameScoreProps } from "../../types";


export const FunctionalFinalScore = ({ correctCount, incorrectCount}: GameScoreProps) => {
  const total = correctCount + incorrectCount; 
  return (
    <div id="final-score">
      <h1>Your Final Score Was</h1>
      <div id="score">
        <p>{correctCount}</p>
        <hr />
        <p>{total}</p>
      </div>
    </div>
  )
};
