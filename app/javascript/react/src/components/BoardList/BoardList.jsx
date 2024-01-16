import React, { useEffect, useState } from 'react';
import { getTenMostRecentBoards } from '../../api/GetMinesweeperBoards';
import ListItem from './ListItem';

import './BoardList.css';
import { Button } from '@mui/material';

const BoardList = () => {
    // const [boardsList, setBoardsList] = useState([]);
    const [boardsList, setBoardsList] = useState([]);
    
    useEffect(() => {
        fetchTenMostRecentBoards()
    }, []);

    const fetchTenMostRecentBoards = async () => {
        const boards = await getTenMostRecentBoards();
        if (boards) {
            setBoardsList(boards);
        }
    }

    return (
        <div className="list-container">
            <h3 className="list-title">Most Recent Generated Boards</h3>
            <div className="list-wrapper">
                {
                    boardsList.map((board) => (
                        <ListItem key={board.id} boardInfo={board} />
                    ))
                }
            </div>
            <div className="list-button-container">
                <Button 
                    style={{borderRadius: 25}} 
                    variant="contained" 
                    fullWidth color="info"
                    onClick={()=>{{}}}>
                        View All Generated Boards
                </Button>
            </div>
        </div>
    )
}

export default BoardList;