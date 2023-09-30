import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #333; 
  font-weight: bold;
`;

export const Bold = styled.span`
  font-size: 18px;
  font-weight: bold; 
  display: block;
  margin-bottom: 20px;
`;
export const UserScore = styled.p`
  font-size: 18px;
 
`;

export const ReleaseDate = styled.p`
  font-size: 18px;
  color: #777; 
`;

export const Overview = styled.p`
  font-size: 18px;
`;

export const GenresList = styled.ul`
  list-style-type: none;
  font-size: 18px;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 10px;


  li {
    margin-bottom: 5px;
 
  }
`;



export const MainImg = styled.img`
width: 300px;
border-radius: 10px;
`;

export const ProductionCompanyList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

export const ProductionCompanyCard = styled.li`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
  width: 250px;
  padding: 10px;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin: 10px auto;
    display: block;
  }

  div {
    font-weight: bold;
    margin-top: 10px;
  }
`;