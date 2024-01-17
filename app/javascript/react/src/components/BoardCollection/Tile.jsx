import React from "react";
import './Tile.css';
import { convertUTCtoLocalTimeZone } from "../../helper/timezoneConverter";
import { useNavigate } from "react-router-dom";

const Tile = ({board}) => {
    const navigate = useNavigate();

    const viewBoard = () => {
        navigate(`/viewBoard/${board.id}`);
    }

    return (
        <div className="tile-container" onClick={viewBoard}>
            <div className="tile-name">{board.name}</div>
            <div className="tile-email">Author: {board.email}</div>
            <div className="tile-date">Created: {convertUTCtoLocalTimeZone(board.created_at)}</div>      
        </div>
    ) 
}

export default Tile;