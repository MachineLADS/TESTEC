import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #666;
  }

  &:active {
    background-color: #222;
  }
`;

const Button = ({ Text, onClick }) => <StyledButton onClick={onClick}>{Text}</StyledButton>;

export default Button;