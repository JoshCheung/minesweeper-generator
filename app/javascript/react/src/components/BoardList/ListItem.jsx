import React from "react";
import { useNavigate } from "react-router-dom";
import './ListItem.css';
import { convertUTCtoLocalTimeZone } from "../../helper/timezoneConverter";

const ListItem = ({boardInfo}) => {
    const navigate = useNavigate();

    const convertTime = () => {
        convertUTCtoLocalTimeZone
        return convertUTCtoLocalTimeZone(boardInfo.created_at)
    }

    const viewBoard = () => {
        navigate(`/viewBoard/${boardInfo.id}`);
    }

    return (
        // <Button style={{borderRadius: 25, border: 0}} >
            <div className="list-item-container" onClick={viewBoard}> 
                <div className="board-info-container">
                    <div className="list-item-name">Name: {boardInfo.name}</div>
                    <div className="list-item-email">Author: {boardInfo.email}</div>
                    <div className="list-item-date">Created At: {convertTime(boardInfo.created_at)}</div>            
                </div>
            </div>
        // </Button>
    )
}

export default ListItem;