import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBoard } from "../../api/GetMinesweeperBoards";
import './Board.css';
import { Button } from "@mui/material";
import BoardGrid from "./BoardGrid/BoardGrid";

const Board = ({id}) => {
    const params = useParams();
    const navigate = useNavigate();
    const [board, setBoard] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBoardDetails();
    }, [id]);

    const fetchBoardDetails = async () => {
        try {
            let board = await getBoard(params.id);
    
            if (board) {
                setBoard(board);
                setLoading(false);
            } else {
                console.error('Board not found or invalid response');
                navigate('/page-not-found');
            }
        } catch (error) {
            console.error('Error fetching board details:', error);
            navigate('/page-not-found');
        }
    }

    const navigateHome = () => {
        navigate('/');
    }

    return (
        <div className="board-page-container">
            <div className="board-wrapper">
                <div className="home-button-container">
                    <Button variant="contained" onClick={navigateHome}>Home</Button>
                </div>
                { loading ? 
                    <p>Loading Board...</p>
                    :
                    <div className="board-container">
                        <div className="board-title-container">
                            <div className="board-title">Minesweeper: {board.name}</div>
                            <div className="board-created-by">Created by: {board.email}</div>
                        </div>
                        <div className="board-grid-container">
                            <BoardGrid grid={board.grid}/>
                        </div>
                    </div>
                }
            </div>  
        </div>
    )
}

export default Board;