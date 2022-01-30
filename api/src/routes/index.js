const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRuta = require('./pokemonRouter');
const typeRuta = require('./typeRouter')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRuta);
router.use('/types', typeRuta);

module.exports = router;
