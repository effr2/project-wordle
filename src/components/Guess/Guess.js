import React from "react";
import { range } from "../../utils.js";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span key={crypto.randomUUID()} className="cell">
            {guess ? guess[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
