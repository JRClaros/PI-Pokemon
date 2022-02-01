import React from "react";
import { Link } from "react-router-dom";
import '../styles/Card.css';
import imgNotFound from '../img/NotFound.gif';

export default function Card({name,image,type,id,attack}){
    if (image){
    return(
            <Link className='card' to = {'/pokemons/' + id}>
                <div className='image'>
                    <img src={image} alt="not found"/>
                </div>
                <div className='content'>
                    <h4>{name}</h4>
                    {/* <h5>Fuerza: {attack}</h5> */}
                    <h6>{type}</h6>
                </div>
            </Link>
    )
    }
    else{
        return(
            <Link className='card' to = {'/pokemons/' + id}>
                <div className='image'>
                    <img src={imgNotFound} alt="not found"/>
                </div>
                <div className='content'>
                    <h5>{'Not Found'}</h5>
                    {/* <h6>{type}</h6> */}
                </div>
            </Link>
    )
    }
}