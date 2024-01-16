import React from "react";
import './ListItem.css';
import { convertUTCtoLocalTimeZone } from "../../helper/timezoneConverter";

const ListItem = ({boardInfo}) => {
    
    const convertTime = () => {
        convertUTCtoLocalTimeZone
        return convertUTCtoLocalTimeZone(boardInfo.created_at)
    }

    return (
        <div className="list-item-container">
            <div className="board-info-container">
                <div className="list-item-name">Name: {boardInfo.name}</div>
                <div className="list-item-email">Author: {boardInfo.email}</div>
                <div className="list-item-date">Created At: {convertTime(boardInfo.created_at)}</div>            
            </div>
        </div>
    )
}

export default ListItem;