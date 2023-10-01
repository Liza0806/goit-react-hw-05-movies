import React, { useEffect, useState } from 'react';
import {FilmList, MovieListTitle} from "./Home.styled"
import { useLocation } from 'react-router-dom';
import { fetchData } from 'Helpers/Services';
import { LoadingSpinner } from 'Helpers/Helpers';
import FilmListItem from 'components/FilmListItem/FilmListItem';

const HomePage = () => {
    const [data, setData] = useState([]);
    const location = useLocation(); 

useEffect(() => {
  const urlPart = `trending/all/day?language=en-US`;

  const fetchHomeData = async () => {
    const data = await fetchData(urlPart);
    if (data) {
      const responseData = data.results;
      setData(responseData); 
    }
  };

  fetchHomeData();
}, []);

      if (!data) {
        return <LoadingSpinner/>
      }

      return (
        <FilmList>
          <MovieListTitle>Trending Today</MovieListTitle>

          <div>
    {data && data.map((film) => (
      <FilmListItem key={film.id} film={film} location={location} />
    ))}
  </div>
        </FilmList>
      );
    };

 export default HomePage;

