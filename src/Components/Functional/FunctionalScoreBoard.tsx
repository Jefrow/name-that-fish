 import "./styles/score-board.css";
//  Where the score is presented
import { GameScoreProps } from "../../types";

const answersLeft = ["trout", "salmon", "tuna", "shark"];

export function FunctionalScoreBoard({correctCount, incorrectCount}: GameScoreProps) {

  const removeFrom = correctCount + incorrectCount; 

  const remainingChoices = answersLeft.slice(removeFrom);
  
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount || 0}</div>
      <div id="choices-left">
        {remainingChoices.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount || 0}</div>
    </div>
  );
}
