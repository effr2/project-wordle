import React from "react";

import GuessInput from "../GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  return (
    <div>
      <GuessResults resultList={results}></GuessResults>
      <GuessInput resultList={results} setResultList={setResults}></GuessInput>
    </div>
  );
}

export default Game;
