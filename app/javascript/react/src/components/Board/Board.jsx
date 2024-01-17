import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBoard } from "../../api/GetMinesweeperBoards";
import './Board.css';
import { Button } from "@mui/material";
import BoardGrid from "./BoardGrid";

const Board = ({id}) => {
    const params = useParams();
    const navigate = useNavigate();
    const [board, setBoard] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBoardDetails();
    }, [id]);

    const fetchBoardDetails = async () => {
        let board = await getBoard(params.id);
        setBoard(board);
        setLoading(false);
    }

    const navigateHome = () => {
        navigate('/');
    }

    return (
        <div className="board-wrapper" >
            <div className="home-button-container">
                <Button variant="contained" onClick={navigateHome}>Home</Button>
            </div>
            { loading ? 
                <p>Loading Board...</p>
                :
                <div className="board-container">
                    <div className="board-title-container" style={{ flex: 'none' }}>
                        <div className="board-title">Minesweeper: {board.name}</div>
                        <h3>Created by: {board.email}</h3>
                    </div>
                    <div className="board-grid-container">
                        <BoardGrid grid={board.grid}/>
                    </div>
                </div>
            }
          
        </div>
    )
}

export default Board;