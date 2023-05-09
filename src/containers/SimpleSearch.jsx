import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';

import CardList from './CardList'
import { useState } from 'react'
import getCardData from '../api/cardData'

const SimpleSearch = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [cardData, setCardData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const search = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        let tempData = await getCardData(searchTerm)
        setIsLoading(false)
        console.log(tempData)
        setCardData(tempData)
    }

    return (
        <div className="body">
            <Paper style={{ width: "100%" }} onSubmit={search}
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >

                <InputBase  onChange={(event) => setSearchTerm(event.target.value)}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Ex: Black Lotus"
                    
                />
                <IconButton onClick={search} type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            {isLoading ? <CircularProgress /> : <CardList cardData={cardData} />}
            
        </div>
    )
}

export default SimpleSearch