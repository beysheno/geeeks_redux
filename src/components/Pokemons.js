import React from 'react';

const Pokemons = ({pokemon}) => {
    return (
        <div className="pokemonCard">
            <p>{pokemon.name}</p>
        </div>
    );
};

export default Pokemons;