import { useState, useEffect } from "react";

import "./GuessColorGame.scss";

const GuessColorGame = () => {
    const startColors = generateHexColors();
    const startBackgroundColor =
        startColors[Math.floor(Math.random() * startColors.length)];

    const [colors, setColors] = useState(startColors);
    const [backgroundColor, setBackgroundColor] =
        useState(startBackgroundColor);
    const [successMessage, setSuccessMessage] = useState();
    const [gameActive, setGameActive] = useState(true);

    // useEffect(() => {
    //     if (!gameActive) {
    //         const timeoutId = setTimeout(() => {
    //             setGameActive(true);
    //             setSuccessMessage(undefined);
    //             insertHexColors();
    //         }, 3600);

    //         return () => clearTimeout(timeoutId);
    //     }
    // }, [gameActive]);

    // const compareColors = (clickedColor) => {
    //     if (backgroundColor === clickedColor && gameActive) { // Dodata provera za gameActive
    //         setSuccessMessage(true);
    //         setGameActive(false); // Blokiranje dugmića
    //     } else {
    //         setSuccessMessage(false);
    //     }
    // };

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
