import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";
import Cell from "../Cell/Cell.js"; // Import the 'Cell' component

function Guess({ answer, guess }) {
	const result = checkGuess(guess, answer);

	

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
