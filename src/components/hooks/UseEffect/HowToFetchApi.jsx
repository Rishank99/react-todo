import { useState, useEffect } from "react";

export const HowToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  //   For Handling loading
  const [loading, setLoading] = useState(true);
  //   For error handling
  const [error, setError] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fetchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
        // It is written after we have got our data from api
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")\
    fetchPokemon();
  }, []);

  console.log(pokemon);
  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  return (
    <section className="container">
      <header>
        <h1>Lets Catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-thee-cols">
            <p className="pokemon-info">
              Height: <span>{pokemon.height}</span>
            </p>
            <p className="pokemon-info">
              Weight: <span>{pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              Speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
