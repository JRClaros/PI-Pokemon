import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search_Name } from '../actions/index';
import '../styles/SearchBar.css';
import img from '../img/buttonSearch.png'

export default function SearchBar(){
    const dispatch = useDispatch();
    const [namePokemon, setNamePokemon] = useState('');

    const handleInputChange = (e) =>{
        e.preventDefault();
        setNamePokemon(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Search_Name(namePokemon.toLowerCase()))
        setNamePokemon('')
    }
    return (
        <div className='searchBox'>
                <input className='searchInput' value= {namePokemon} type='text' placeholder='Buscar Pokemon...' onChange={handleInputChange}/>
                <div className='searchButton'>
                    <button>
                        <img src={img} alt='not-found' type='submit' onClick={handleSubmit}/>
                    </button>
                </div>
                
        </div>
    )
}