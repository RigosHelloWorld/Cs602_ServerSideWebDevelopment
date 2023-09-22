import './number-guessing.css'

import { Box, Button,TextField } from '@mui/material';
import axios from 'axios';

import { useState } from 'react';

export default function NumberGuessing() {
    const MIN = 1;
    const MAX = 100;
    const [guessedNumber, setGuessedNumber] = useState(MIN);
    const [showImage, setShowImage] = useState(false);
    const [hasGuessed, setHasGuessed] = useState(false);

    const handleInputChange = (e) => {
        setGuessedNumber(e.target.value);
    }

    const validateGuess = () => {
        if (isNaN(guessedNumber) || guessedNumber === "") {
            alert("Please input a valid number!");
        }
        else if (guessedNumber < MIN || guessedNumber > MAX) {
            alert(`Please enter a number between ${MIN} and ${MAX}`);

        }
    }

    const submitGuess = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/guess/${MIN}/${MAX}/${guessedNumber}`);
            console.log(response);
            setHasGuessed(true)
            if (response.data.message === "Correct") { // Replace "correct" with the exact message you expect
                setShowImage(true);
            } else {
                setShowImage(false); // Optionally hide the image if the guess is incorrect
            }
    
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div>
                <h1 className='header'>
                    Lets guess a number
                </h1>
            </div>
            <div className='min-max'>
                <h2>
                    Range
                </h2>
                <TextField 
                    id="min-number"
                    label="Min:"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    disabled={true}
                    defaultValue={MIN}
                />
                <TextField
                    id="max-number"
                    label="Max:"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    disabled={true}
                    defaultValue={MAX}
                />
            </div>
            <Box className= 'guess-number'>
                <TextField 
                    id="guess-number"
                    label="Guess:"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={guessedNumber}
                    onChange={handleInputChange}
                    onBlur={validateGuess}
                />

                <Button mt={20}
                    variant="outlined"
                    onClick={submitGuess}>
                    Save
                </Button>
                <Box>
            {showImage ? <img src="https://uploads-ssl.webflow.com/646218c67da47160c64a84d5/64634a28cf0d1f7c50354cb1_83.png" alt="Correct Guess" /> : 
(hasGuessed && <img src="https://t4.ftcdn.net/jpg/05/08/38/47/240_F_508384795_AaOb8TQgvq6BqOCbMXtAgEKZJofEXPOn.jpg" alt="Incorrect Guess" />)}


            </Box>
            </Box>

        </>
    )
}
