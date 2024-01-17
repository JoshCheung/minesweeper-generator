import React, { useEffect, useState } from "react";
import { Table, TableRow, TableCell, TableBody } from "@mui/material";

const BoardGrid = ({grid}) => { 
    const [gridboard, setGrid] = useState(grid);

    return (
        <Table>
            <TableBody>
                { 
                    grid.map((row) => (
                        <TableRow>
                            {
                                row.map((cell) => (
                                    <TableCell style={{height: 40, width: 40, border: "1px solid black"}}>
                                        {cell == 1 ? "MINE" : " "}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
export default BoardGrid;