import React, { useEffect, useState } from "react";
import { Table, TableRow, TableCell, TableBody } from "@mui/material";
import "./BoardGrid.css";
import Mine from "../Mines/Mine";
import EmptyCell from '../Cells/EmptyCell';

const BoardGrid = ({grid}) => { 
    if (!grid) {
        return null;
    }
    return (
        <table>
            <tbody>
            { 
                     grid.map((row, index) => (
                        <tr key={index}>
                             {
                                 row.map((cell, index) => (
                                    <td  key={index} className="board-cell">
                                        {cell == 1 ? <Mine/> : <EmptyCell/>}
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