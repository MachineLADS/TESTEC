import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/click";
import * as C from "./styles";

const Home = () => {
  const [animeList, setAnimeList] = useState([
    "Naruto",
    "One Piece",
    "Attack on Titan",
    "Demon Slayer",
    "My Hero Academia",
  ]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const toggleFavorite = (anime) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(anime)
        ? prevFavorites.filter((item) => item !== anime)
        : [...prevFavorites, anime]
    );
  };

  const handleFinish = () => {
    alert(`Seus animes preferiodos são: ${favorites.join(", ")}`);
    navigate("/thank-you");
  };

  return (
    <C.Container>
      <C.Title>Slecione seus animes favotios</C.Title>

      {/* Lista de animes para selecionar */}
      <C.List>
        {animeList.map((anime) => (
          <C.Item key={anime} isFavorite={favorites.includes(anime)}>
            <span>{anime}</span>
            <Button
              Text={favorites.includes(anime) ? "Remove" : "Add"}
              onClick={() => toggleFavorite(anime)}
            />
          </C.Item>
        ))}
      </C.List>

      {/* Espaço para os animes favoritos */}
      <C.FavoritesSection>
        <C.SubTitle>Your Favorites</C.SubTitle>
        {favorites.length > 0 ? (
          <C.FavoritesList>
            {favorites.map((anime) => (
              <C.FavoriteItem key={anime}>
                <span>{anime}</span>
              </C.FavoriteItem>
            ))}
          </C.FavoritesList>
        ) : (
          <C.NoFavorites>No favorites selected yet.</C.NoFavorites>
        )}
      </C.FavoritesSection>

      <Button Text="Finish" onClick={handleFinish} />
    </C.Container>
  );
};

export default Home;