import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const [pokemonData, setPokemonData] = useState({
    name: '',
    id: '',
    image: '',
    isLoading: false,
    notFound: false,
  });
  const [searchPokemon, setSearchPokemon] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();

  // Atualiza o Pokémon com base no ID da URL ou no estado inicial
  useEffect(() => { const initialPokemon = id ? id : searchPokemon; renderPokemon(initialPokemon); }, [id]);

  // Função para buscar e definir os dados do Pokémon
  const renderPokemon = async (pokemon) => {
    setPokemonData({ ...pokemonData, isLoading: true, notFound: false });
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setPokemonData({
          name: data.name,
          id: data.id,
          image: data.sprites.versions['generation-v']['black-white']['animated']['front_default'],
          isLoading: false,
          notFound: false,
        });
        setSearchPokemon(data.id);
        navigate(`/pokemon/${data.id}`);
      } else {
        setPokemonData({ ...pokemonData, notFound: true, isLoading: false });
      }
    } catch (error) {
      setPokemonData({ ...pokemonData, notFound: true, isLoading: false });
    }
  };

  // Manipuladores de eventos para os botões e formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      renderPokemon(input.toLowerCase());
    }
  };

  const handleNext = () => renderPokemon(searchPokemon + 1);
  const handlePrev = () => renderPokemon(searchPokemon - 1);


  return (
    <main className="pokedex">
      <img
        src={pokemonData.image || './images/pokedex.png'}
        alt="pokemon"
        className="pokemon__image"
        style={{ display: pokemonData.image ? 'block' : 'none' }}
      />
      <h1 className="pokemon__data">
        {pokemonData.isLoading ? 'Loading...' : pokemonData.notFound ? 'Not found :c' : `${pokemonData.id} - ${pokemonData.name}`}
      </h1>

      <form className="form" onSubmit={handleSubmit}>
        <input type="search" className="input__search" placeholder="Name or Number" required onChange={(e) => setInput(e.target.value)} />
      </form>

      <div className="buttons">
        <button className="button btn-prev" onClick={handlePrev} disabled={searchPokemon <= 1}>
          Prev &lt;
        </button>
        <button className="button btn-next" onClick={handleNext}>
          Next &gt;
        </button>
      </div>
    </main>
  );
};


export default Home;


/*import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;*/
