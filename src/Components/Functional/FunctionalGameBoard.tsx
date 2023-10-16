import "./styles/game-board.css";
import { useState } from 'react';
import { GameInfoProps } from "../../types";

export function FunctionalGameBoard({ round, onAnswer, initialFishes }: GameInfoProps) {
  const [guess, setGuess] = useState('');

  // todo, derive this
  // todo: rename this to `isLastFish` 

  const nextFishToName = initialFishes[round];

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form
        id="fish-guess-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (guess.toLowerCase() === nextFishToName.name) {
            onAnswer(true);
          } else {
            onAnswer(false);
          }
          setGuess('');
        }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={guess}
          onChange={(e) => {
            e.preventDefault();
            setGuess(e.target.value);
          }} />
        <input type="submit" />
      </form>
    </div>
  );
}
