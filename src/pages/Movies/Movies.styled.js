import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  font-size: 16px;
`;

export const SearchResultList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const SearchResultItem = styled.li`
  margin-bottom: 10px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    font-weight: bold;
   

  &:hover,
  &:focus {
   
    color: #ff4500;;
  }}
`;