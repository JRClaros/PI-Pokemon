import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon, getType, filterType, filterDataBase, orderName, orderByAttack } from '../actions/index.js';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar.jsx';
import Loading from './Loading.jsx'
import '../styles/Home.css';
import imgHome from '../img/logo.svg';

export default function Home(){
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.pokemons);
    const allTypes = useSelector((state) => state.types);
    // const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
    const lastPokemon = currentPage * pokemonsPerPage;
    const firstPokemon = lastPokemon - pokemonsPerPage;
    const currentPokemons= allPokemons.slice(firstPokemon,lastPokemon);
    const pokeFirstPag = allPokemons.slice(firstPokemon, lastPokemon)
    // eslint-disable-next-line no-unused-vars
    const [orderByName, setOrderByName] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [orderAttack, setOrderAttack] = useState('');

    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    const filterPokemonsPag = ()=>{
        if(currentPage === 1) return pokeFirstPag;
        return currentPokemons;
    }

    useEffect(()=>{
        dispatch(getPokemon())
        dispatch(getType())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getPokemon());
    }

    function handleFilterType(e){
        dispatch(filterType(e.target.value))
        setCurrentPage(1);
    }
    
    function handleFilterDataBAse(e){
        dispatch(filterDataBase(e.target.value))
    }

    function handleOrderName(e){
        e.preventDefault();
        dispatch(orderName(e.target.value))
        setCurrentPage(1);
        setOrderByName(`Ordenado ${e.target.value}`);
    }

    function handleOrderAttack(e){
        e.preventDefault();
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1);
        setOrderAttack(`Ordenado ${e.target.value}`);
    }
    
    return(
        <div className = 'HomeGlobal'>
            <div className='Nav'>
                <div className='HomeButton'>
                    <img className='HomeLogo' onClick={handleClick} src={imgHome} alt='notfound'/>
                        <SearchBar/>
                        
                    <div className='HomeCrear'> 
                        <Link to='/createpokemon'><button>Crear</button></Link>
                    </div>
                </div>
                <div className='NavMenu'>
                    <input type='checkbox'/>
                    <span></span>
                    <span></span>
                    <div className = 'HomeMenu'>
                            <li>
                                <select onChange={handleFilterType}>                       
                                    <option value='all' key='all'>Todos los Tipos</option>
                                    {  
                                        allTypes?.map(t =>{
                                            return(
                                                <option value={t.name} key={t.name}>{t.name}</option>
                                            )
                                        })
                                    }                                        
                                </select>
                            </li>
                            <li>
                                <select onChange={handleFilterDataBAse}>
                                    <option value='todo'>Todos los Pokemons</option>
                                    <option value='dataBase'>Creados</option>
                                    <option value='api'>Existentes</option>
                                </select>
                            </li>
                            <li>   
                                <select onChange={handleOrderName}>
                                    <option value="ascendente">Ascendente    (A-Z)</option>
                                    <option value="descendente">Descendente (Z-A)</option>
                                </select>
                            </li> 
                            <li>
                                <select onChange={handleOrderAttack}>
                                    <option value='fMax'>Fuerza Max.</option>
                                    <option value='fMin'>Fuerza Min.</option>
                                </select>
                            </li>
                    </div>
                </div>
            </div>
            <div className='CardGlobal'>
                {
                     allPokemons.length === 0? <Loading/>:
                     filterPokemonsPag()?.map(p =>{
                            return(     
                                        <Card  key={p.id } id={p.id} name= {p.name} image= {p.image} type= {p.types + '  '}/>
                            )
                        })
                }
            </div>

            <div className='Paginado'>
                <Paginado
                    pokemonsPerPage = {pokemonsPerPage}
                    allPokemons     = {allPokemons.length}
                    paginado        = {paginado}
                />
            </div>   
        </div>
    )
}
