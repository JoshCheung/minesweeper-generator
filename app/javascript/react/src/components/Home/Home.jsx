import React from 'react';
import BoardGeneratorForm from '../BoardGeneratorForm/BoardGeneratorForm';
// import BoardList from '';
import "./Home.css";

const Home = () => {
    return (    
        <div className="home-container">
            <div className="home-form-container">
                <BoardGeneratorForm/>
            </div>

            <div className="board-list-container ">
                {/* <BoardList/> */}
            </div>  
        </div>
    )
}

export default Home;