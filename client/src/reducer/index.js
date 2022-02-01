const initialState = {
    pokemons : [],
    pokemonsBck : [],
    types:[],
    detail_poke:[]
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_POKEMON':
            return{
                ...state,
                pokemons : action.payload,
                pokemonsBck : action.payload
            }

        case 'GET_TYPE':
            return{
                ...state,
                types : action.payload
            }   
        
        case 'GET_DETAIL_POKEMON':
            return{
                ...state,
                detail_poke: action.payload
            }    

        case 'FILTER_TYPE':
            const pokemonsBck = state.pokemonsBck;
            const filterType = action.payload === 'all'? pokemonsBck : pokemonsBck.filter(p => p.types.includes(action.payload))
            return{
                ...state,
                pokemons : filterType
            }   
            
        case 'FILTER_DATABASE':
            const allPokemons = state.pokemonsBck;
            const filterDb = action.payload === 'dataBase' ?  allPokemons.filter(el => el.createdDb) : allPokemons.filter(el => !el.createdDb)
            return{
                ...state,
                pokemons: action.payload === 'todo' ? state.pokemonsBck : filterDb
            }  

        case 'ORDER_NAME':
            let orderByName = action.payload === 'ascendente' ? state.pokemons.sort(function(a,b){
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0;
            }): state.pokemons.sort(function(a,b){
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0;
            })
            return{
                ...state,
                pokemons: orderByName
            }    

        case 'ORDER_BY_ATTACK':
            let orderAttack = action.payload === 'fMax' ? state.pokemons.sort(function(a,b){
                return (b.attack - a.attack)
            }): state.pokemons.sort(function(a,b){
                return (a.attack - b.attack)
            })

            return{
                ...state,
                pokemons: orderAttack
            }   

        case 'SEARCH_NAME':
            return {
                ...state,
                pokemons: [action.payload]
            }   

        case 'POST_POKEMON':
            return {
                ...state
            }    

        default: return {...state};
    }
}

