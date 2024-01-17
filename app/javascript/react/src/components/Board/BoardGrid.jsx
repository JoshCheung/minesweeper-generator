import React, { useEffect, useState } from "react";
import { Table, TableRow, TableCell, TableBody } from "@mui/material";
import "./BoardGrid.css";
import Mine from "./Mine";

const BoardGrid = ({grid}) => { 
    const [gridboard, setGrid] = useState(grid);

    return (
        <table>
            <tbody>
            { 
                     grid.map((row, index) => (
                        <tr key={index}>
                             {
                                 row.map((cell, index) => (
                                    <td  key={index} className="board-cell">
                                        {cell == 1 && <Mine/>}
                                    </td>
                                 ))
                             }
                         </tr>
                     ))
                 }
            </tbody>
        </table>
    )
}
export default BoardGrid;