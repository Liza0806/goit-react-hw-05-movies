import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
    const [data, setData] = useState([]);
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
  console.log(data)
       
      })}, []);

      return (
        <ul>
          {data.map((film) => (
            <li key={film.id} className='list'>
           {film.title ?? film.name}
            </li>
          ))}
        </ul>
      );
    };

 export default MainPage;

