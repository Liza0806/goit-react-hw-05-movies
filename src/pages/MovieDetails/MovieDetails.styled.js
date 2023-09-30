import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const BackLink = styled(Link)`
  font-size: 18px;
  margin-right: 20px;
  color: #ff4500;
  font-weight: bold; 
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const ForLinks = styled.div`
display: flex; 
justify-content: space-around;
padding-bottom: auto;
`;