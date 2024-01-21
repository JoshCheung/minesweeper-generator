import React from "react";
import Mine from "../Board/Mines/Mine";
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-not-found-container">
            <div className="page-not-found-content">
                <Mine/> 
                <div className="page-not-found-text">
                    Page Not Found :(
                </div> 
                <Mine/>
            </div>
        </div>
    )
}
export default PageNotFound;