import  React, { useState } from "react";
/*
    b should look like this
    initialBoardState = [
        ["_","_","_"],
        ["_","_","_"],
        ["_","_","_"]
    ]
 */
const initialBoardState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const human = "X";
const ai = "O";

const Game = () => {
    const [gameState, setGameState] = useState(initialBoardState);
    const [winner, setWinner] = useState("");
    const [iter, setIter] = useState(0);
    const [round, setRound] = useState(0);
    const [cheat, setCheat] = useState(-1);
    const [winCounter, setWinCounter] = useState({ai: 0, player: 0});

    function minimax(b, player) {
        setIter(iter + 1);
        let array = avail(b);
        if (winning(b, human)) {
            return { score: -10 };
        } else if (winning(b, ai)) {
            return { score: 10 };
        } else if (array.length === 0) {
            return { score: 0 };
        }

        let moves = [];
        for (let i = 0; i < array.length; i++) {
            let move = {};
            move.index = b[array[i]];
            b[array[i]] = player;

            if(player === ai) {
                let g = minimax(b, human);
                move.score = g.score;
            } else {
                let g = minimax(b, ai);
                move.score = g.score;
            }
            b[array[i]] = move.index;
            moves.push(move);
        }

        let bestMove;
        if (player === ai) {
            let bestScore = -1000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }
        return moves[bestMove];
    }

    function reset() {
        setGameState(initialBoardState);
        setIter(0);
        setRound(0);
        setCheat(-1);
        setWinner("");
    }

    function avail(b) {
        return b.filter(s => s !== "X" && s !== "O");
    }

    function winning(b, player) {
        return (b[0] === player && b[1] === player && b[2] === player) ||
            (b[3] === player && b[4] === player && b[5] === player) ||
            (b[6] === player && b[7] === player && b[8] === player) ||
            (b[0] === player && b[3] === player && b[6] === player) ||
            (b[1] === player && b[4] === player && b[7] === player) ||
            (b[2] === player && b[5] === player && b[8] === player) ||
            (b[0] === player && b[4] === player && b[8] === player) ||
            (b[2] === player && b[4] === player && b[6] === player);
    }

    function aiCheat(b) {
        if (b[0] === "O" && b[4] === "O") return 1;
        else if (b[0] === "O" && b[3] === "O") return 2;
        else if (b[1] === "O" && b[4] === "O") return 3;
        else if (b[2] === "O" && b[5] === "O") return 4;
        else if (b[2] === "O" && b[4] === "O") return 5;
        else if (b[0] === "O" && b[1] === "O") return 6;
        else if (b[1] === "O" && b[2] === "O") return 7;
        else if (b[3] === "O" && b[4] === "O") return 8;
        else if (b[4] === "O" && b[5] === "O") return 9;
        else if (b[6] === "O" && b[7] === "O") return 10;
        else if (b[7] === "O" && b[8] === "O") return 11;
        else if (b[6] === "O" && b[4] === "O") return 12;
        else if (b[3] === "O" && b[6] === "O") return 13;
        else if (b[4] === "O" && b[7] === "O") return 14;
        else if (b[5] === "O" && b[8] === "O") return 15;
        else if (b[4] === "O" && b[8] === "O") return 16;
    }

    function move(square, player) {
        if (winner === "" && gameState[square] !== "X" && gameState[square] !== "O") {
            setRound(round + 1);
            let newArray = [...gameState];
            newArray[square] = player;
            setGameState(newArray);

            if (winning(newArray, player)) {
                setWinner("Player");
                return;
            } else {
                setRound(round + 1);
                let index = minimax(newArray, ai).index;
                newArray[index] = ai;
                setGameState(newArray);
                if (winning(newArray, ai)) {
                    setWinner("AI");
                    setWinCounter({ai: winCounter.ai + 1,
                                         player: winCounter.player});
                    return;
                }
                if (round === 4) {
                    setWinner("Draw");
                    setCheat(aiCheat(newArray));
                    setWinCounter({ai: winCounter.ai + 1,
                        player: winCounter.player});
                    return;
                }
            }
        }
    }


    return (
        <div>
            <div className="text-center" style={{paddingTop: "50px"}}>
               <h1> Unfair Tic-Tac-Toe </h1>
            </div>
            <div className="game-board">
                {/*Cheat Board*/}
                {(cheat === 1) ? <button className="game-board-row-two game-board-col-two">O</button>: null}
                {(cheat === 2) ? <button className="game-board-row-two game-board-col-three">O</button>: null}
                {(cheat === 3) ? <button className="game-board-row-two game-board-col-four">O</button>: null}
                {(cheat === 4) ? <button className="game-board-row-two game-board-col-five">O</button>: null}
                {(cheat === 5) ? <button className="game-board-row-two game-board-col-six">O</button>: null}
                {(cheat === 6) ? <button className="game-board-row-three game-board-col-two">O</button>: null}
                {(cheat === 7) ? <button className="game-board-row-three game-board-col-six">O</button>: null}
                {(cheat === 8) ? <button className="game-board-row-four game-board-col-two">O</button>: null}
                {(cheat === 9) ? <button className="game-board-row-four game-board-col-six">O</button>: null}
                {(cheat === 10) ? <button className="game-board-row-five game-board-col-two">O</button>: null}
                {(cheat === 11) ? <button className="game-board-row-five game-board-col-six">O</button>: null}
                {(cheat === 12) ? <button className="game-board-row-six game-board-col-two">O</button>: null}
                {(cheat === 13) ? <button className="game-board-row-six game-board-col-three">O</button>: null}
                {(cheat === 14) ? <button className="game-board-row-six game-board-col-four">O</button>: null}
                {(cheat === 15) ? <button className="game-board-row-six game-board-col-five">O</button>: null}
                {(cheat === 16) ? <button className="game-board-row-six game-board-col-six">O</button>: null}
                {/*Normal Board*/}
                <button className="game-board-row-three game-board-col-three" onClick={() => move(0,"X")}> {typeof(gameState[0]) === "number" ? ' ' : gameState[0]} </button>
                <button className="game-board-row-three game-board-col-four" onClick={() => move(1,"X")}> {typeof(gameState[1]) === "number" ? ' ' : gameState[1]} </button>
                <button className="game-board-row-three game-board-col-five" onClick={() => move(2,"X")}> {typeof(gameState[2]) === "number" ? ' ' : gameState[2]} </button>
                <button className="game-board-row-four game-board-col-three" onClick={() => move(3,"X")}> {typeof(gameState[3]) === "number" ? ' ' : gameState[3]} </button>
                <button className="game-board-row-four game-board-col-four" onClick={() => move(4,"X")}> {typeof(gameState[4]) === "number" ? ' ' : gameState[4]} </button>
                <button className="game-board-row-four game-board-col-five" onClick={() => move(5,"X")}> {typeof(gameState[5]) === "number" ? ' ' : gameState[5]} </button>
                <button className="game-board-row-five game-board-col-three" onClick={() => move(6,"X")}> {typeof(gameState[6]) === "number" ? ' ' : gameState[6]} </button>
                <button className="game-board-row-five game-board-col-four" onClick={() => move(7,"X")}> {typeof(gameState[7]) === "number" ? ' ' : gameState[7]} </button>
                <button className="game-board-row-five game-board-col-five" onClick={() => move(8,"X")}> {typeof(gameState[8]) === "number" ? ' ' : gameState[8]} </button>
            </div>
            <div className="text-center">
                <p> Winner: {winner !== "Draw" ? winner : <><s>Draw</s> AI</>} </p>
                <p> AI Victories: {winCounter.ai} <br/>
                Player Victories: {winCounter.player}</p>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
};


export default Game;