import React from "react";
import Tile from './Tile';
import './Collection.css'

const Collection = ({boards}) => {
    return (
        <div className="collection-container">
                {
                    boards.map((board) => (
                        <Tile key={board.id} board={board}/>
                    ))
                }
        </div>
    )
}

export default Collection;