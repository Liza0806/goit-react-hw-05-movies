import styled from 'styled-components';

export const CastList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

export const CastCard = styled.li`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
  width: 250px;
  padding: 10px;
  text-align: center;

  h1 {
    font-size: 18px;
    margin: 0;
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    color: #777;
  }

  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
    margin: 10px auto;
    display: block;
    border-radius: 4px;
  }
`;
