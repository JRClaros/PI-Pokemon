import React from "react";
import { Link } from "react-router-dom";
import '../styles/Card.css';

export default function Card({name,image,type,id}){
    return(
            <Link className='card' to = {'/pokemons/' + id}>
                <div className='image'>
                    <img src={image} alt="not found"/>
                </div>
                <div className='content'>
                    <h5>{name}</h5>
                    <h6>{type}</h6>
                </div>
            </Link>
    )
}