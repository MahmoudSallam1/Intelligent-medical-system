import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  background-color: #f5f6fa;
`;

export const Content = styled.div`
  display: grid;
  gap: 1em;
  align-items: center;
  justify-content: center;
  padding: 2em;
`;

export const Buttons = styled.div`
  background-color: white;
  padding: 1em;
  border-radius: 10px;
  color: #6b6c6f;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.09);
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 200px));
  gap: 1em;
  align-items:center;
  justify-content:center;
  text-align:center;



  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 10em;
  border-radius: 10px;
  color: #6b6c6f;
  font-size: 0.9rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.09);
  @media (max-width: 650px) {
  }
`;

export const SessionIcon = styled.img`
  width: 20%;
  cursor: pointer;
`;

export const Button = styled.img`
  object-fit: cover;
  cursor: pointer;
  width: 35%;
  @media (max-width: 650px) {
  
  }
`;
