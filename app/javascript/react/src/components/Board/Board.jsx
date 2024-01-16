import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { getBoard } from "../../api/GetMinesweeperBoards";

const Board = ({id}) => {
    const params = useParams();
    const [board, setBoard] = useState([])

    useEffect(() => {
        fetchBoardDetails();
    }, [id]);

    const fetchBoardDetails = async () => {
        let board = await getBoard(params.id);
        setBoard(board.grid);
    }

    return (
        <div className="board-component-container">
            
        </div>
    )
}

export default Board;