import { Router } from 'express';
import { PokemonController } from './controllers/pokemon';

const router = Router();

const pokemonController = new PokemonController();

router.get('/pokemons/:name', pokemonController.saveCache);

export default router;