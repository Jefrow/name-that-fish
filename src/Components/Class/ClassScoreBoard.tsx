import { Component } from "react";
import "./styles/score-board.css";
import { GameScoreProps } from "../../types";

const answersLeft = ["trout", "salmon", "tuna", "shark"];
export class ClassScoreBoard extends Component<GameScoreProps> {
  render() {

    const {correctCount, incorrectCount} = this.props

    const removeFrom = correctCount + incorrectCount; 

    const remainingChoices = answersLeft.slice(removeFrom);

    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {remainingChoices.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
