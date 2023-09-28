import styled from "styled-components";
import { Link } from 'react-router-dom';
 
export const FilmList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column
`;

export const FilmItem = styled.li`
  margin: 10px;
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
  color: #333;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #ff4500; 
  }
`;