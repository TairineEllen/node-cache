import { Request, Response } from 'express';
import { clientTedis  } from '../redisConfig';
import axios from 'axios';

export class PokemonController {
  async saveCache(req: Request, res: Response) {
    const { name } = req.params;    
 
  const result = await clientTedis.get(name);

  if (result) {
    return res.status(200).send({
      message: 'Hello, I\'m in cache',
      pokemon: name
    })
  } else {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    await clientTedis.setex(name, 20, JSON.stringify(pokemon.data));
    return res.send({
      message: 'Hello, I\'m in server',
      pokemon: name
    });
  }    
  }
}