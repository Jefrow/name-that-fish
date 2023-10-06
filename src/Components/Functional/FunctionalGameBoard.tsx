import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import { useState } from 'react';
import { TGameInfo } from "../../types";

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

export function FunctionalGameBoard({ handleGameInfo }: { handleGameInfo: (info: TGameInfo) => void }) {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answer, setAnswer] = useState('');
  const [round, setRound] = useState(0);
  const [lastFish, setLastFish] = useState(false);

  const nextFishToName = initialFishes[round];

  const checkAnswer = (fishName:string , guess:string) => {
    if (fishName === guess) {
      setCorrectCount(correctCount + 1);
      setIncorrectCount(incorrectCount + 0);
    } else {
      setCorrectCount(correctCount + 0);
      setIncorrectCount(incorrectCount + 1);
    }
  }


  const updateRound = () => {
    if(round < initialFishes.length -1) {
      setRound(round + 1); 
    }
  }

  const checkLast = () => {
    if(round === initialFishes.length) {
      setLastFish(true); 
    }
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault()
          checkAnswer(nextFishToName.name, answer)
          updateRound()
          checkLast()
          handleGameInfo({
            correctGuesses: correctCount,
            incorrectGuesses: incorrectCount,
            remainingAnswers: [],
            isLast: lastFish
          })
          setAnswer('')
        }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={answer}
          onChange={(e) => {
            e.preventDefault()
            setAnswer(e.target.value)
          }} />
        <input type="submit" />
      </form>
    </div>
  );
}
