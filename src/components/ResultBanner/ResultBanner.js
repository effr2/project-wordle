import React from "react";

function ResultBanner({ status, answer = "", numGuesses = 0 }) {
  let bannerType = "sad";

  if (status === "win") {
    bannerType = "happy";
    return (
      <div className={`${bannerType} banner`}>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{` ${numGuesses} guess${numGuesses > 1 ? "es" : ""}`}</strong>
          .
        </p>
      </div>
    );
  } else if (status === "lost") {
    return (
      <div className={`${bannerType} banner`}>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default ResultBanner;
