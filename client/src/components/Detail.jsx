import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDetailPokemon } from "../actions/index";
import Loading from "./Loading.jsx";
import '../styles/Detail.css';

function DetailPokemon(props){

    const params = useParams();
    const dispatch = useDispatch();
    const detailPoke = useSelector((state) => state.detail_poke);

    useEffect(()=>{
        dispatch(getDetailPokemon(params.id))
    },[dispatch]);
    
    return(
        <div className='DetailGlobal'> 
            <Link to='/pokemons'>
                <button className='BtnRegresar'>Regresar</button>
            </Link>
            {
                detailPoke?
                    <div className='Detail'>
                        <div className='ContentDetail'>
                            <div className='TitleName'>
                                <h1>{detailPoke.name}</h1>
                            </div>
                            <div className='Picture'>
                                <img src={detailPoke.image} alt="Not found"/>
                            </div>
                            <div className="Types">
                                <h4>{detailPoke.types + ' '}</h4>
                            </div>                           
                            <div className='Statistics'>
                                <h5>Estadísticas</h5>
                            </div>
                            <div className='DetailPokemon'>   
                                <li>Vida     :{detailPoke.hp}</li>
                                <li>Fuerza   :{detailPoke.attack}</li>
                                <li>Defensa  :{detailPoke.defense}</li>
                                <li>Velocidad:{detailPoke.speed}</li>
                                <li>Altura   :{detailPoke.height}</li>
                                <li>Peso     :{detailPoke.weight}</li>
                                <li>Id       :{detailPoke.id}</li>
                              

                            </div>
                        </div>   
                    </div>: <Loading/>    

            }
        </div>
    )

};
export default DetailPokemon;
