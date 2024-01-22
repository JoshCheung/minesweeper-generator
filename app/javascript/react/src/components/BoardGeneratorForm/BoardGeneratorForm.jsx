import React, {useEffect, useState} from 'react';
import { createBoard } from '../../api/MinesweeperCreate';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import './BoardGeneratorForm.css';

const BoardGeneratorForm = () => {
    const navigate = useNavigate();
    const validEmailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    // had to research this pattern:
    // ^ anchor the pattern to the beginning of the string 
    // [a-zA-Z0-9]+ one or more occurences of letters or numbers
    // followed by the @ symbol
    // followed by more letters or numbers and then "."
    // followed by [letters]
    // $ is to anchor the end of the pattern 

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [numberOfMines, setNumberOfMines] = useState(0);
    const [emailError, setEmailError] = useState(false);
    const [valid, setValidity] = useState(false);
    const [helperEmailText, setHelpEmailText] = useState("");

    useEffect(() => {
       checkValidity();
    }, [email, name, height, width, numberOfMines]);

    const handleEmailInput = (value) => {
        setEmail(value);
        validateEmail(email);
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

    const validateEmail = () => {
        if (email.match(validEmailPattern)) {
            setEmailError(false);
            setHelpEmailText("");
            return true;
        }
        setEmailError(true);
        setHelpEmailText("Not a Valid Email.");
        return false;
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
        navigate(`/viewBoard/${response.id}`)
    }

    return (
        <div className="form-container">
            <h2 className="title">Minesweeper Board Generator</h2>
            <div className="input-form-container">
                <div className="input-container">
                    <TextField
                        error={emailError}
                        fullWidth
                        value={email}
                        type="email"
                        required={true}
                        onChange={(e) => handleEmailInput(e.target.value)}
                        helperText={helperEmailText}
                        label="Email Address"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        value={name}
                        required={true}
                        onChange={(e) => handleNameInput(e.target.value)}
                        label="Board Name"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        value={height}
                        required={true}
                        onChange={(e) => handleHeightInput(e.target.value)}
                        type="number"
                        label="Board Height (Max 30)"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        value={width}
                        required={true}
                        onChange={(e) => handleWidthInput(e.target.value)}
                        type="number"
                        label="Board Width (Max 30)"
                    />
                </div>
                <div className="input-container">
                    <TextField
                        fullWidth
                        required={true}
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
                    <Button style={{borderRadius: 25}} fullWidth variant="contained" color="success" onClick={() => {handleSubmit()}}>Generate Board</Button>
                    :
                    <Button id="data-test-id" style={{borderRadius: 25}} disabled fullWidth variant="contained">Generate Board</Button>

                }
            </div>
        </div>
    )
}

export default BoardGeneratorForm;