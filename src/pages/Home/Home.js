import React, { useEffect, useState } from 'react';
import {FilmList, FilmItem, FilmLink} from "./Home.styled"
import { useLocation } from 'react-router-dom';
import { fetchData } from 'Helpers/Helpers';
import { LoadingSpinner } from 'Helpers/Helpers';
import { FcCamcorderPro } from 'react-icons/fc';
import Popup from 'reactjs-popup';

const HomePage = () => {
    const [data, setData] = useState([]);
    const location = useLocation(); 

useEffect(() => {
  const url = `
  https://api.themoviedb.org/3/trending/all/day?language=en-US`;

  const fetchHomeData = async () => {
    const data = await fetchData(url);
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
          {data.map((film) => (
            <FilmItem key={film.id}>
               <Popup
            trigger={ open => (
              <FilmLink to={`${film.id}`} state={{ from: location }} className='list'>  {film.title ?? film.name}</FilmLink>
            )}
            position="right center"
            on={['hover', 'focus']}
            closeOnDocumentClick
          >
              <span> {film.poster_path? (<img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="Tooltip Image" width={"200"}/>): (
  <FcCamcorderPro style={{ width: '100px', height: '100px' }} />
)}</span>
          </Popup>   
            </FilmItem>
          ))}
        </FilmList>
      );
    };

 export default HomePage;

