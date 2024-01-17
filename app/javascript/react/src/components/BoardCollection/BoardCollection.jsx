import React, { useEffect, useState } from "react";
import Collection from './Collection';
import { useNavigate } from "react-router";
import { Button, Pagination } from "@mui/material";
import { getAllBoardsByPage } from "../../api/GetMinesweeperBoards";
import "./BoardCollection.css";

const BoardCollection = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const [numPages, setNumPages] = useState(0);
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBoards(1);
    }, [])

    const navigateHome = () => {
        navigate('/');
    }


    const fetchBoards= async () => {
        try {
            fetchBoardPage(1);
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };


    const handleChange = (event, value) => {
        if (value !== page) {
            fetchBoardPage(value);
            setPage(value);
        }
    };

    const fetchBoardPage = async (pageNumber) => {
        const fetchedBoards = await getAllBoardsByPage(pageNumber);
        setBoards(fetchedBoards.boards);
        setNumPages(fetchedBoards.total_pages)
        setLoading(false);
    }

    return (
        <div className="collection-page-container">
           <div className="home-button-container">
                <Button variant="contained" onClick={()=>{navigateHome()}}>Home</Button>
            </div>
        
            <div className="board-collection-header">
                <h1>Generated Boards</h1>
            </div>

            {
                loading ? 
                <p>Loading Boards...</p>
                :
                <Collection boards={boards}/>
            }

            <div className="AdminPage-pagination-container">
                <Pagination page={page} onChange={handleChange} count={numPages}/>
            </div>
        </div>
    )
}

export default BoardCollection;