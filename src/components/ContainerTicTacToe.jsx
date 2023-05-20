import { useEffect, useState } from "react";
import { BoardGame } from "./BoardGame"
import { BiReset } from "react-icons/bi"

export const ContainerTicTacToe = () => {

    

    const emptyBoard = Array(9).fill("");
    const [board, setBoard] = useState(emptyBoard)
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [winner, setWinner] = useState(null)

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
            return setWinner("1")

            if(cells.every(cell => cell === "O"))
            return setWinner("2")

            
        })
        checkDraw()

        
    }

    const checkDraw = () => {
        if(board.every(item => item !== "")) {
            setWinner("E")
        }
    }

    useEffect(checkWinner, [board, checkDraw]);

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

    const resetGaming = () =>{
        setCurrentPlayer("X");
        setBoard(emptyBoard);
        setWinner(null);
    }

    return(
        <>
        <h1 className="title">Jogo da Velha #</h1>
        {currentPlayer && <div className="player-container">
        {currentPlayer === "X" ?
            <h1>Vez do Player 1</h1> :
            <h1>Vez do Player 2</h1>}
            </div>}
        <div className="container-game">
            
            {board.map((item, index) => (
                <BoardGame 
                key={index}
                className={`board${item}`}
                item={item}
                onClick={() => handleClick(index)}
                />
            ))} 
        </div>
        {winner && <div className="winner-container">
            {winner === "E" ?
            <h2>Empate!</h2>
            :
            <h2>Player {winner} Venceu!</h2> 
        
        }
            <button onClick={resetGaming}>Resetar<BiReset/></button>
        </div> }
         
        
        
        </>
    )
}