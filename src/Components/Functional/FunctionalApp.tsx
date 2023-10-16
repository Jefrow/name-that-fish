import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react"

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


export function FunctionalApp() {

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const round = correctCount + incorrectCount;

  const isLast = round === initialFishes.length;

  const handleAnswer = (isCorrect: boolean): void => {
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }

  }

  return (
    <>
      {isLast ? (
        <FunctionalFinalScore correctCount={correctCount} incorrectCount={incorrectCount} />
      ) : (
        <>
          <FunctionalScoreBoard correctCount={correctCount} incorrectCount={incorrectCount} />
          <FunctionalGameBoard round={round} onAnswer={handleAnswer} initialFishes={initialFishes} />
        </>
      )}
    </>
  );
}
