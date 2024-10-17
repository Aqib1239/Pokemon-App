import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonCard = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setPokemonDetails(response.data))
      .catch((error) =>
        console.error("Error fetching Pokémon details:", error)
      );
  }, [url]);

  if (!pokemonDetails) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <img
        src={pokemonDetails.sprites.front_default}
        alt={name}
        className="w-20 h-20 mx-auto"
      />
      <h2 className="text-xl font-semibold text-gray-700 mt-2 capitalize">
        {name}
      </h2>
      <p className="text-gray-500">Height: {pokemonDetails.height}</p>
      <p className="text-gray-500">Weight: {pokemonDetails.weight}</p>
    </div>
  );
};

export default PokemonCard;
