import styled from "styled-components";
import { Link } from 'react-router-dom';
 
export const FilmList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column
`;

export const FilmItem = styled.li`
  margin: 4px;
`;

export const FilmLink = styled(Link)`
text-decoration: none;
color: #333;
font-size: 18px;
font-weight: bold;

  &:hover,
  &:focus {
    color: #ff4500; 
  }
`;

export const MovieListTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #333; 
  font-weight: bold;
  padding-bottom: 10px;
`;
