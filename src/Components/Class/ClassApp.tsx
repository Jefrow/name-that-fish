import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };

  render() {
    const {correctCount, incorrectCount} = this.state

    const round = this.state.incorrectCount + this.state.correctCount;

    const isLast = round === initialFishes.length;
  
    const handleAnswer = (isCorrect:boolean): void => {
      if (isCorrect) {
        this.setState({ correctCount: this.state.correctCount + 1})
      } else {
        this.setState({ incorrectCount: this.state.incorrectCount + 1})
      }
    }

    return (
      <>
        {isLast ? (
          <ClassFinalScore correctCount={correctCount} incorrectCount={incorrectCount} />
        ) : (
          <>
            <ClassScoreBoard correctCount={correctCount} incorrectCount={incorrectCount}/>
            <ClassGameBoard round={round} onAnswer={handleAnswer} initialFishes={initialFishes}/>
          </>
        )}
      </>
    );
  }
}
