import './baby-names.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';

export default function BabyNames() {
    const [newBabyNamesList, setNewBabyNamesList] = useState([]);
    const [choosenBabyName, setChoosenBabyName] = useState('');
    const [savedBabyNameList, setSavedBabyNames] = useState([])
    const [deletBabyName, setDeleteBabyName] = useState('');

    useEffect(() => {
        fetchBabyNames()

    }, [])

    const fetchBabyNames = async () => {
        try {
            const response = await axios.get('http://localhost:8080/babynames/discover')
            setNewBabyNamesList(response.data.message)
        } catch (error) {
            console.log("Error fetching data: ", error);
        }
    }


    const tempBabyName = (name) => {
        setChoosenBabyName(name)
    }


    const saveBabyName = async () => {
        try {
            console.log('asdadasdasd');
            await axios.post('http://localhost:8080/babynames/save', {
                name: choosenBabyName
            })
            fetchBabyNameList();
        } catch (error) {
            console.log(error);
        }
    }

    const fetchBabyNameList = async () => {
        try {
            const response = await axios.get('http://localhost:8080/babynames/list')
            setSavedBabyNames(response.data.message)
            console.log(savedBabyNameList);
        } catch (error) {
            console.log(
                error
            );
        }

    }

    const deleteBabyName = async () => {
        try {
            await axios.post(`http://localhost:8080/babynames/delete/${deletBabyName}`)
            setDeleteBabyName('')
        } catch (error) {
            console.log(error);
        }finally{
            fetchBabyNameList();
        }
    }

    return (

        <>
            <h1 className="baby-name-header">
                Lets choose some baby names.
            </h1>
            <ul>
                {newBabyNamesList.map((name, index) => (
                    <li
                        className='baby-name-list'
                        onClick={() => tempBabyName(name)}
                        key={index}>{name}
                    </li>
                ))}
            </ul>
            <div className="center-screen">
                <Button
                    className='next-baby-name-group'
                    variant="outlined"
                    onClick={fetchBabyNames}
                >
                    Next group of baby names
                </Button>
                <Box className="saveBox" mt={2} mb={2}>
                    {choosenBabyName && (
                        <>
                            Baby name to save: {choosenBabyName}
                            <Box ml={2} component="span">
                                <Button
                                    variant="outlined"
                                    onClick={saveBabyName}>
                                    Save
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>


            </div>
            <h1 className="baby-name-header">
                Saved Baby names
            </h1>
            {savedBabyNameList.length > 0     ?         <ul>
                {savedBabyNameList.map((name, index) => (
                    <li
                        className='baby-name-list'
                        key={index}>{name}
                    </li>
                ))}

                <div className="center-screen">
                    <Box className="saveBox" mt={2} mb={2}>
                        <input
                            type='text'
                            placeholder='Enter babyname to delete'
                            value={deletBabyName}
                            onChange={ e=> setDeleteBabyName(e.target.value)}
                        >
                        </input>

                        <Box ml={2} component="span">
                            <Button
                                variant="outlined"
                                onClick={deleteBabyName}>
                                Save
                            </Button>
                        </Box>
                    </Box>


                </div>
            </ul> : <h1>No baby names saved</h1>}



        </>
    );
}
