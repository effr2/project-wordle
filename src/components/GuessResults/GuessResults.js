import React from "react";

function GuessResults({ resultList }) {
  console.log(resultList);
  return (
    <div className="guess-results">
      {resultList.map(({ result, id }) => {
        return (
          <p key={id} className="guess">
            {result}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
