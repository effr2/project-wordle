import React from "react";

import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import ResultBanner from "../ResultBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");
  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess === answer) {
      setGameStatus("win");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <div>
      <GuessResults answer={answer} resultList={guesses}></GuessResults>
      {gameStatus === "win" && (
        <ResultBanner
          status={gameStatus}
          numGuesses={guesses.length}
        ></ResultBanner>
      )}
      {gameStatus === "lost" && (
        <ResultBanner status={gameStatus} answer={answer}></ResultBanner>
      )}
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      ></GuessInput>
    </div>
  );
}

export default Game;
