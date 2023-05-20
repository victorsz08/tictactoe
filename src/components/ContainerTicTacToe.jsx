import { useState } from "react";
import { BoardGame } from "./BoardGame"

export const ContainerTicTacToe = () => {

    const emptyBoard = Array(9).fill("");

    const [board, setBoard] = useState(emptyBoard)

    const handleClick = (index) => {
        setBoard(board.map((item, itemIndex) => itemIndex === index ? "X" : item))
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
        </div>
    )
}