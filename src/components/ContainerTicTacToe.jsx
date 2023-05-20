import { useEffect, useState } from "react";
import { BoardGame } from "./BoardGame"
import { WinnerPlayer } from "./winnerPlayer";

export const ContainerTicTacToe = () => {

    

    const emptyBoard = Array(9).fill("");
    const [board, setBoard] = useState(emptyBoard)
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [winner, setWinner] = useState('')

    const checkWinner = () => {
        const possibleWins = [
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],
            
            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],
            
            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]],
        ]

        possibleWins.forEach(cells => {
            if(cells.every(cell => cell === "X"))
            return setWinner("X")

            if(cells.every(cell => cell === "O"))
            return setWinner("O")
        })
    }

    useEffect(checkWinner, [board]);

    const handleClick = (index) => {
        if(winner) {
            return null;
        }

        if(board[index] !== "") {
            return null;
        }

        setBoard(board.map(
            (item, itemIndex) => itemIndex === index ? currentPlayer : item))
    
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

   

    

    return(
        <div className="container-game">
            {board.map((item, index) => (
                <BoardGame 
                key={index}
                className={`board${item}`}
                item={item}
                onClick={() => handleClick(index)}
                />
            ))} 
            {winner ? <WinnerPlayer win={winner}/> : ""}
        </div>
    )
}