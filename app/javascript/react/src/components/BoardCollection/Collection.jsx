import React from "react";
import Tile from './Tile';


const Collection = () => {
    return (
        <div className="recipe-boxes-container">
            {
                board.map((board) => (
                    <Tile key={collection.id}  collection={collection} collectionPath={collectionPath}/>
                ))
            }
        </div>
    )
}

export default Collection;