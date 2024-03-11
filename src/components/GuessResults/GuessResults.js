import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ resultList }) {
  console.log(resultList);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        const guess = resultList[num];
        return guess ? (
          <Guess key={guess.id} guess={guess.input}></Guess>
        ) : undefined;
      })}
    </div>
  );
}

export default GuessResults;
