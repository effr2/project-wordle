import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";

function Guess({ answer, value }) {
console.log(value);
  const result = checkGuess(value, answer);

  function Cell({ letter, status }) {
    const className = status ? `cell ${status}` : "cell";

    return <span className={className}>{letter}</span>;
  }

  return (
    <p className="guess">
      {range(5).map((num) => {
        const status = result ? result[num].status : undefined;
        const letter = result ? result[num].letter : undefined;
        return <Cell key={num} letter={letter} status={status}></Cell>;
      })}
    </p>
  );
}

export default Guess;
