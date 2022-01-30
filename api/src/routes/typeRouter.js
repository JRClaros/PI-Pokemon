const { Router } = require("express");
const axios = require('axios');
const router = Router();
const { Type } = require('../db.js');

router.get('/', async (req,res) =>{

        const typeDb = await Type.findAll();

        try {
            if(typeDb.length === 0){
                let typeApi = await axios.get(`https://pokeapi.co/api/v2/type`);
                typeApi = typeApi.data.results.map(t => t.name);
                typeApi.forEach(t =>{
                    // Type.findOrCreate({
                    //Type.create({
                    Type.create({
                        name: t
                    });
                });
            }
            res.json(typeDb);
        } catch (error) {
            return res.status(404).json({error: 'Tipos no fueron cargados' + error});
        }
})

module.exports = router;