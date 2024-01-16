import React, {useEffect, useState} from 'react';
import { createBoard } from '../../api/MinesweeperCreate';
import { Button, TextField } from '@mui/material';
import './BoardGeneratorForm.css';

const BoardGeneratorForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);
    const [numberOfMines, setNumberOfMines] = useState(1);
    const [valid, setValidity] = useState(false);

    useEffect(() => {
       checkValidity();
    }, [email, name, height, width, numberOfMines]);

    const handleEmailInput = (value) => {
        setEmail(value);
    }

    const handleNameInput = (value) => {
        setName(value);
    }

    const handleHeightInput = (value) => {
        setHeight(value);
    }

    const handleWidthInput = (value) => {
        setWidth(value);
    }

    const handleMinesInput = (value) => {
        setNumberOfMines(value);
    }

    const checkValidity = () => {
        setValidity(email != '' && name != '' && checkDimensions() && checkNumberOfMines());
    }
    
    const checkNumberOfMines = () => {
        return 1 <= numberOfMines && numberOfMines <= height * width;
    }

    const checkDimensions = () => {
        if (width == '' || height == '') {
            return false;
        }
        return  (1 <= width && width <= 30) && (1 <= height && height <= 30);
    }

    const handleSubmit = async () => {
        let response = await createBoard({
            email, name, height, width, numberOfMines
        });
        console.log(response);
    }

    return (
        <div className="form-container">
            <h2 className="title">Minesweeper Board Generator</h2>
            <div className="input-form-container">
                <div className="input-container">
                    <TextField
                        fullWidth
                        value={email}
                        onChange={(e) => handleEmailInput(e.target.value)}
                        label="Email Address"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        value={name}
                        onChange={(e) => handleNameInput(e.target.value)}
                        label="Board Name"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        value={height}
                        onChange={(e) => handleHeightInput(e.target.value)}
                        type="number"
                        label="Board Height (Max 30)"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        value={width}
                        onChange={(e) => handleWidthInput(e.target.value)}
                        type="number"
                        label="Board Width (Max 30)"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        value={numberOfMines}
                        onChange={(e) => handleMinesInput(e.target.value)}
                        type="number"
                        label="Number of Mines"
                    />
                </div>
            </div>
            <div className="button-container">
                {
                    valid ?
                    <Button style={{borderRadius: 25}} fullWidth variant="contained" color="success" onClick={() => {handleSubmit()}} >Generate Board</Button>
                    :
                    <Button style={{borderRadius: 25}} disabled fullWidth variant="contained">Generate Board</Button>

                }
            </div>
        </div>
    )
}

export default BoardGeneratorForm;