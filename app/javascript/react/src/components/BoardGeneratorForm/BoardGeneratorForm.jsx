import React from 'react';
import './BoardGeneratorForm.css';
import { Button, TextField } from '@mui/material';

const BoardGeneratorForm = () => {
    return (
        <div className="form-container">
            <h2 className="title">Minesweeper Board Generator</h2>
            <div className="input-form-container">
                <div className="input-container">
                    <TextField
                        fullWidth
                        label="Email Address"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        label="Board Name"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        label="Board Height (Max 30)"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        label="Board Width (Max 30)"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        label="Number of Mines"
                    />
                </div>
            </div>
            <div className="button-container">
                <Button style={{borderRadius: 25}} fullWidth variant="contained" color="success">Generate Board</Button>
            </div>
        </div>
    )
}

export default BoardGeneratorForm;