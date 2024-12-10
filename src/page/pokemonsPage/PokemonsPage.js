import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPokemonAction} from "../../redux/actions";
import Pokemons from "../../components/Pokemons";

const PokemonsPage = () => {
    const {loading, pokemons, error} = useSelector(state => state.pokemonsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemonAction())
    },[])

    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error}</p>;
    }
    return (
        <div>
            <h1>Pokemons</h1>
            {pokemons.map(pokemon => (<Pokemons key={pokemon.id} pokemon={pokemon} />))}
        </div>
    );
};

export default PokemonsPage;