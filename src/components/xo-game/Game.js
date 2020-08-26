import  React, { useState } from "react";
import Board from "./Board";

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i = 0; i < lines.length; i ++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a];
    }
    return null;
}

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    // const renderMoves = () => (
    //     history.map((_step, move) => {
    //         const destination = move ? `Go to move #${move}` : "Go to Start";
    //         return (
    //             <li key={move}>
    //                 <button onClick={() => jumpTo(move)}>{destination}</button>
    //             </li>
    //         )
    //     })
    // );

    return (
        <>
            <h1>React XO - With Hooks</h1>
            <div className="credit"> template: codeSTACKr</div>
            <h3 className="text-center">{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="text-center">
                <button onClick={() => jumpTo(0)}>Restart</button>
            </div>
        </>
    )
};

export default Game;