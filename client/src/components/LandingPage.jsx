import React from "react";
import { Link } from "react-router-dom";
import '../styles/LandingPage.css';
import imgHome from '../img/logo.svg';

export default function LandinPage(){
    return(
            <div  className ='Landing'>
                <div className="imagenLP">
                    <img  src={imgHome} alt='notfound'/>
                </div>    
                <Link to = "/pokemons">
                    <button>Ingresar</button>
                </Link>
            </div>
    )
}