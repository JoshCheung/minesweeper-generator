import React from 'react';
import { Link } from "react-router-dom";
import BoardGeneratorForm from '../BoardGeneratorForm/BoardGeneratorForm';
import BoardList from '../BoardList/BoardList';
import Board from '../Board/Board';

import "./Home.css";

const Home = () => {
    return (    
        <div className="home-container">
            <div className="home-form-container">
                <BoardGeneratorForm/>
            </div>

            <div className="board-list-container">
                <BoardList/>
            </div>  
        </div>
    )
}

export default Home;