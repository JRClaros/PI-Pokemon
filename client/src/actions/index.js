import axios from "axios";

export const GET_POKEMON = 'GET_POKEMON';
export const GET_TYPE = 'GET_TYPE';
export const FILTER_TYPE = 'FILTER_TYPE';
export const GET_DETAIL_POKEMON = 'GET_DETAIL_POKEMON';
export const FILTER_DATABASE = 'FILTER_DATABASE';
export const ORDER_NAME = 'ORDER_NAME';
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK';
export const SEARCH_NAME = 'SEARCH_NAME';

export function getPokemon(){
    return async function(dispatch){
        let link_Pokemons = await axios.get("http://localhost:3001/pokemons");
        return dispatch({
            type : GET_POKEMON,
            payload : link_Pokemons.data
        }) 
    }
};

export function getType(){
    return async function(dispatch){
        let link_Type = await axios.get("http://localhost:3001/types");
        return dispatch({
            type: GET_TYPE,
            payload:link_Type.data
        })
    }
};

export function getDetailPokemon(payload){
    return async function(dispatch){
        let link_DetailPoke=await axios.get(`http://localhost:3001/pokemons/${payload}`);
        return dispatch({
            type: GET_DETAIL_POKEMON,
            payload: link_DetailPoke.data
        })
    }
};

export function filterType(payload){
    return{
        type: FILTER_TYPE,
        payload
    }
};

export function filterDataBase(payload){
    return{
        type: FILTER_DATABASE,
        payload
    }
};

export function orderName(payload){
    return{
        type: ORDER_NAME,
        payload
    }
};

export function orderByAttack(payload){
    return{
        type: ORDER_BY_ATTACK,
        payload
    }
};

export function Search_Name(payload){

    return async function(dispatch){
            try {
                let rutaName = await axios.get(`http://localhost:3001/pokemons?name=${payload}`)
                return dispatch ({
                    type: SEARCH_NAME,
                    payload: rutaName.data
                })
            } catch (error) {
                alert('pokemon no encontrado')
            } 
    }
};

export function postPokemon(payload){
    return async function(dispatch){
        let rutaParaPost = await axios.post('http://localhost:3001/pokemons', payload)
        return rutaParaPost;
    }
}