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
                     grid.map((row) => (
                         <tr>
                             {
                                 row.map((cell) => (
                                     <td className="board-cell">
                                         {cell == 1 && <Mine/>}
                                     </td>
                                 ))
                             }
                         </tr>
                     ))
                 }
            </tbody>
        </table>
        // <Table>
        //     <TableBody>
        //         { 
        //             grid.map((row) => (
        //                 <TableRow>
        //                     {
        //                         row.map((cell) => (
        //                             <TableCell className="board-cell">
        //                                 {cell == 1 && <Mine/>}
        //                             </TableCell>
        //                         ))
        //                     }
        //                 </TableRow>
        //             ))
        //         }
        //     </TableBody>
        // </Table>
    )
}
export default BoardGrid;