import { Component } from "react";
import "./styles/game-board.css";
import { GameInfoProps } from "../../types";

type GuessType = {
  guess: string;
}

export class ClassGameBoard extends Component<GameInfoProps,GuessType> {
  state= {
    guess: ''
  }

  render() {
    const { round, onAnswer, initialFishes } = this.props
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
            if (this.state.guess.toLowerCase() === nextFishToName.name) {
              onAnswer(true);
            } else {
              onAnswer(false);
            }
            this.setState({ guess: '' });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.guess}
            onChange={(e) => {
              e.preventDefault();
              this.setState({ guess: e.target.value })
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
