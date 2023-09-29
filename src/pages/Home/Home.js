import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { Form, Link } from 'react-router-dom';
import {FilmList, FilmItem, FilmLink} from "./Home.styled"
import { useLocation } from 'react-router-dom';
import { ColorRing } from  'react-loader-spinner'

const HomePage = () => {
    const [data, setData] = useState([]);
    const location = useLocation(); 
    useEffect(() => { axios
      .get(`https://api.themoviedb.org/3/trending/all/day?language=en-US`, {
        headers: {
        Accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQwOGNhMTljY2JmM2U1MjgwN2ViZmVjZDEwOGUzNiIsInN1YiI6IjY1MTJiYjFkYTkxMTdmNzY1ZDg4OTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wk5fdIqZPgG2xDOolV97Xo9axot0ymipWFnQCS9z3XQ'
          
        },
      })
      .then((response) => {
        const responseData = response.data.results;
        setData(responseData);
 // console.log(responseData)
       
      })}, []);

      if (!data) {
     
        return <div>
            <ColorRing
        visible={true}
        height="180"
        width="180"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
        </div>;
      }

      return (
        <FilmList>
          {data.map((film) => (
            <FilmItem key={film.id}>
              <FilmLink to={`${film.id}`} state ={{ from: location}} className='list'>
                {film.title ?? film.name}
              </FilmLink>
            </FilmItem>
          ))}
        </FilmList>
      );
    };

 export default HomePage;

