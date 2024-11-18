import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(to bottom, #6ab7f5, #fff);
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #444;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.isFavorite ? "#ffe082" : "#f0f0f0")};
  border: ${(props) => (props.isFavorite ? "2px solid #f57c00" : "1px solid #ccc")};
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  span {
    font-size: 1.2rem;
    color: #333;
  }
`;

export const FavoritesSection = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid #444;
  border-radius: 10px;
  background-color: #fff;
`;

export const FavoritesList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FavoriteItem = styled.li`
  padding: 10px 0;
  font-size: 1.1rem;
  color: #444;
  text-align: left;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const NoFavorites = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #aaa;
  margin-top: 10px;
`;