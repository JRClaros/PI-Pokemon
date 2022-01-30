const { Router } = require('express');
const axios = require('axios');
const router = Router();
const { Pokemon, Type } = require('../db.js');


router.get('/', async (req,res) =>{
    const { name } = req.query;

    if (name){
       try {
             let pokemonName = await Pokemon.findOne({
                 where:{name},
                 include:Type
             });

             if(!pokemonName){
                 const pokemonNameApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
                 let pokemonNameFound={
                    id     : pokemonNameApi.data.id,
                    name   : pokemonNameApi.data.name, 
                    image  : pokemonNameApi.data.sprites.other.dream_world.front_default,
                    hp     : pokemonNameApi.data.stats[0].base_stat,
                    attack : pokemonNameApi.data.stats[1].base_stat,
                    defense: pokemonNameApi.data.stats[2].base_stat,
                    speed  : pokemonNameApi.data.stats[5].base_stat,
                    height : pokemonNameApi.data.height,
                    weight : pokemonNameApi.data.weight,
                    types  : pokemonNameApi.data.types.map(t => t.type.name)
                 };
                return res.send(pokemonNameFound);
             };
             let pokeTypesName={
                id     : pokemonName.id,
                name   : pokemonName.name, 
                image  : pokemonName.image,
                hp     : pokemonName.hp,
                attack : pokemonName.attack,
                defense: pokemonName.defense,
                speed  : pokemonName.speed,
                height : pokemonName.height,
                weight : pokemonName.weight,
                types  : pokemonName.types.map(t => t.name)
             };
             if (pokeTypesName) return res.json(pokeTypesName);

       } catch (error) {
         return res.status(404).json({error: `No se encontro ${name}` });
       };
    };
    try {
        let allPokemons = await Pokemon.findAll({
            include : Type
        });
        let pokemonDb = allPokemons.map(p =>{
            let pokemonTypes = p.types.map(t => t.name);
            return{
                id    : p.id,
                name  : p.name, 
                image : p.image, 
                types : pokemonTypes, 
                attack: p.attack,
                createdDb: p.createdDb
            }
        });

          let pokemonApi = await axios.get('https://pokeapi.co/api/v2/pokemon'); 
          let pokemon40 = await axios.get(pokemonApi.data.next);
              pokemonApi = pokemonApi.data.results.map(el => {
                  return axios.get(el.url);                 
              });
             
              pokemon40 = pokemon40.data.results.map(el => {
                return axios.get(el.url)
             });
             pokemonApi = [...pokemonApi, ...pokemon40];
             pokemonApi = await Promise.all(pokemonApi);
             pokemonApi = pokemonApi.map(el =>{
                    let pokemonOficial = {
                                id    : el.data.id,
                                name  : el.data.name, 
                                image : el.data.sprites.other.dream_world.front_default, 
                                types : el.data.types.map(t => t.type.name), 
                                attack: el.data.stats[1].base_stat
                                }
                        return pokemonOficial;   
             });
             allPokemons = pokemonDb.concat(pokemonApi);
             res.json(allPokemons);

    } catch (error) {
        return res.status(404).json({error: 'Datos no fueron cargados' });
    }
});

router.get('/:id', async(req,res)=>{
    const { id } = req.params;  

    if (id.includes('-')){
        try {
            const pokemonId = await Pokemon.findByPk(id, {include: Type});

            let pokemonTypesId = {
                id     : pokemonId.id,
                name   : pokemonId.name, 
                image  : pokemonId.image,
                hp     : pokemonId.hp,
                attack : pokemonId.attack,
                defense: pokemonId.defense,
                speed  : pokemonId.speed,
                height : pokemonId.height,
                weight : pokemonId.weight,
                createdDb: pokemonId.createdDb,
                types  : pokemonId.types.map(t => t.name)
            }
            if (pokemonTypesId) return res.json(pokemonTypesId);
        } catch (error) {
            return res.status(404).json({error: `No se encontro ${id}` });
        }
    };
    try {
        let pokemon_Id = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            pokemon_Id ={
                id     : pokemon_Id.data.id,
                name   : pokemon_Id.data.name, 
                image  : pokemon_Id.data.sprites.other.dream_world.front_default,
                hp     : pokemon_Id.data.stats[0].base_stat,
                attack : pokemon_Id.data.stats[1].base_stat,
                defense: pokemon_Id.data.stats[2].base_stat,
                speed  : pokemon_Id.data.stats[5].base_stat,
                height : pokemon_Id.data.height,
                weight : pokemon_Id.data.weight,
                types  : pokemon_Id.data.types.map(t => t.type.name)
            };
            res.json(pokemon_Id)
    } catch (error) {
        return res.status(404).json({error: `No se encontro ${id}` });
    }

});

router.post('/', async (req,res) =>{
    try {
        const { name,image,hp,attack,defense,speed,height,weight,createdDb,types } = req.body;
        const pokemon = await Pokemon.create({
            name : name.toLocaleLowerCase(),
            image,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            createdDb
        })
        await pokemon.addTypes(types)
        res.status(201).send('Pokemon fue creado con éxito!!!')
    } catch (error) {
        res.status(404).send('Pokemon no fue creado: ' + error);
    }
})
module.exports = router;
