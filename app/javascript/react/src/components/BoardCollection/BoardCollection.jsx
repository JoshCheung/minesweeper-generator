import React from "react";
import Collection from './Collection';
import { useNavigate } from "react-router";
import { Button, Pagination } from "@mui/material";
import "./BoardCollection.css";

const BoardCollection = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);

    const navigateHome = () => {
        navigate('/');
    }

    const handleChange = (value) => {
        if (value !== page) {
            setPage(value);
            fetchRecipePage(value);
        }
    };


    return (
        <div className="collection-page-container">
           <div className="home-button-container">
                <Button variant="contained" onClick={()=>{navigateHome()}}>Home</Button>
            </div>
        
            <div className="board-collection-header">
                <h1>Generated Boards</h1>
            </div>

            <Collection/>

            <div className="AdminPage-pagination-container">
                <Pagination page={page} onChange={(e) => handleChange(e.target.value)}/>
            </div>
        </div>
    )
}

export default BoardCollection;