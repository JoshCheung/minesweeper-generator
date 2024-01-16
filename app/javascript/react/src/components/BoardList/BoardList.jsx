import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

import './BoardList.css';
import { Button } from '@mui/material';

const BoardList = () => {
    // const [boardsList, setBoardsList] = useState([]);
    const [boardsList, setBoardsList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    useEffect(() => {

    }, []);

    return (
        <div className="list-container">
            <h3 className="list-title">Most Recent Generated Boards</h3>
            <div className="list-wrapper">
                {
                    boardsList.map((item) => (
                        <ListItem/>
                    ))
                }
            </div>
            <div className="list-button-container">
                <Button  style={{borderRadius: 25}} variant="contained" fullWidth color="info">View All Generated Boards</Button>
            </div>
        </div>
    )
}

export default BoardList;