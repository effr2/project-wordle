import React from "react";

function GuessInput({ guesses, setGuesses }) {
  const [guessInput, setGuessInput] = React.useState("");
  return (
    <div>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(guessInput);

          const nextGuesses = [...guesses];
          const nextGuess = { guess: guessInput, id: crypto.randomUUID() };
          nextGuesses.push(nextGuess);
          setGuesses(nextGuesses);

          setGuessInput("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guessInput}
          onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
          id="guess-input"
          type="text"
        />
      </form>
    </div>
  );
}
export default GuessInput;
