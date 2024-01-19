import React from "react";
import './Mine.css'
const Mine = () => {
    return (
        <div className="mine-shell">
            <div className="mine-reflection-container">
                <div className="mine-reflection"></div>
            </div>
            <div style={{position: "relative"}}>
            <div className="line-through-horizontal"></div>
            <div className="line-through-vertical"></div>
            <div className="line-through-diagonal-down"></div>
            <div className="line-through-diagonal-up"></div>
            </div>
        </div>
    )
}
export default Mine;