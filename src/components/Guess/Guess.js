import React from "react";

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {
        return (
          <div>
            <p key={id} className="guess">
              {guess.split("").map((letter) => {
                return <span key={crypto.randomUUID()} className="cell">{letter}</span>;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Guess;
