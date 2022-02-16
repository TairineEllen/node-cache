const express = require('express');
import { client } from './config'

const app = express();
const port = 3000;

app.get('/pokemons/:name', async (req, res) => {
 

  client.on("connect", () => {
    console.log("connect");
  });

  const {name} = req.params;

  res.send(name)
  


  
  // if (pokemon) {
  //   return res.status(200).send({
  //     message: 'Pokemon from the cache'
  //   });
  // } else {
  //   const pokemonInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  //   client.setEx(name, 30, JSON.stringify(pokemonInfo.data));
  //   await client.quit();
  //   return res.status(200).send({
  //     message: 'Pokemon from the server'
  //   });
  // }  

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

