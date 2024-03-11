import React from "react";

import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
// import GuessResults from "../GuessResults/GuessResults";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <div>
      {/* <GuessResults resultList={results}></GuessResults> */}
      <Guess guesses={guesses}></Guess>
      <GuessInput guesses={guesses} setGuesses={setGuesses}></GuessInput>
    </div>
  );
}

export default Game;
