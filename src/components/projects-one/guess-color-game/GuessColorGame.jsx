import { useState } from "react";

import "./GuessColorGame.scss";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * GuessColorGame is a React component that provides an interactive game
 * where the user has to guess the correct color from a set of randomly
 * generated hexadecimal color codes. On a correct guess, a success message
 * is displayed, and the game resets after a short delay. On an incorrect
 * guess, an error message is shown, allowing the user to try again.
 *
 * The component maintains state for the current set of colors, the
 * background color to be guessed, whether the game is active, and the status
 * of the last guess. Colors are randomly generated and updated as the game
 * progresses.
 *
 * Methods include:
 * - `generateHexColors()`: Generates an array of three random hexadecimal colors.
 * - `insertHexColors()`: Updates the state with a new set of colors and a new
 *   target background color.
 * - `compareColors(clickedColor)`: Compares the clicked color with the target
 *   background color and updates the game state accordingly.
 *
 * The component renders a set of buttons for selecting colors and displays
 * messages indicating the result of the user's guess.
 */

/*******  4e29f853-4c57-4d26-b642-f53ca6bdd6d3  *******/
const GuessColorGame = () => {
    const startColors = generateHexColors();
    const startBackgroundColor =
        startColors[Math.floor(Math.random() * startColors.length)];

    const [colors, setColors] = useState(startColors);
    const [backgroundColor, setBackgroundColor] =
        useState(startBackgroundColor);
    const [successMessage, setSuccessMessage] = useState();
    const [gameActive, setGameActive] = useState(true);

    const compareColors = (clickedColor) => {
        setSuccessMessage(undefined);

        if (backgroundColor === clickedColor && gameActive) {
            setGameActive(false);
            setSuccessMessage(true);

            const timeoutId = setTimeout(() => {
                setGameActive(true);
                setSuccessMessage(undefined);
                insertHexColors();
            }, 3600);

            return () => clearTimeout(timeoutId);
        } else {
            const timeoutId = setTimeout(() => {
                setSuccessMessage(false);
            }, 100);
            return () => clearTimeout(timeoutId);
        }
    };

    function insertHexColors() {
        const generatedHexColors = generateHexColors();

        const generatedBackgroundHexColor =
            generatedHexColors[
                Math.floor(Math.random() * generatedHexColors.length)
            ];

        setBackgroundColor(generatedBackgroundHexColor);
        setColors(generatedHexColors);
    }

    function generateHexColors() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        const hexColors = [];

        for (let i = 0; i < 3; i++) {
            let hexColor = "#";
            for (let i = 0; i < 6; i++) {
                hexColor += hex[Math.floor(Math.random() * hex.length)];
            }
            hexColors[i] = hexColor;
        }

        return hexColors;
    }

    return (
        <div className="guess-color">
            <div
                className="guess-color--background"
                style={{
                    backgroundColor: backgroundColor,
                }}
            ></div>
            <button
                className="guess-color__button"
                onClick={gameActive ? () => compareColors(colors[0]) : () => {}}
                // style={{
                //     backgroundColor: colors[0],
                // }}
            >
                {colors[0]}
            </button>
            <button
                className="guess-color__button"
                onClick={gameActive ? () => compareColors(colors[1]) : () => {}}
                // style={{
                //     backgroundColor: colors[1],
                // }}
            >
                {colors[1]}
            </button>
            <button
                className="guess-color__button"
                onClick={gameActive ? () => compareColors(colors[2]) : () => {}}
                // style={{
                //     backgroundColor: colors[2],
                // }}
            >
                {colors[2]}
            </button>
            <p>Chose your color.</p>
            <div className="guess-color--success-message">
                {successMessage !== undefined ? (
                    successMessage ? (
                        <>
                            <p className="correct">
                                <span>You guessed the color correctly!</span>
                                The game will reset in:
                            </p>
                        </>
                    ) : (
                        <p className="incorrect">
                            Wrong color! Guess one more time.
                        </p>
                    )
                ) : null}
            </div>
        </div>
    );
};

export default GuessColorGame;
