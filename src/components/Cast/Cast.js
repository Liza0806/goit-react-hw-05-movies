import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import {CastList,  CastCard} from "./Cast.styled";
import { CiImageOn } from 'react-icons/ci'



const Cast = () => {
    const {movieId} = useParams();
  
    const [castData, setCastData] = useState(null);
    useEffect(() => {
        const fetchCastData = async () => {
                  try {  
    const response = await axios.get(`
       https://api.themoviedb.org/3/movie/${movieId}/credits?`, 
       {
        headers: {
        Accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQwOGNhMTljY2JmM2U1MjgwN2ViZmVjZDEwOGUzNiIsInN1YiI6IjY1MTJiYjFkYTkxMTdmNzY1ZDg4OTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wk5fdIqZPgG2xDOolV97Xo9axot0ymipWFnQCS9z3XQ' 
        },
      });  
      console.log(response.data.cast)
      setCastData(response.data.cast); 
    } catch (error) {
               console.error('Error:', error);
             }}

      fetchCastData();
       
      }, [movieId]);


      if (!castData) {
        return <div>Loading...</div>;
      }
      console.log(castData)
    return ( <CastList>
        {castData.map(person => {
            return(
              <CastCard>
                <div key={person.id}>
                <h1>{person.name}</h1>
                <p>{person.character}</p>
               { person.profile_path? <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} ></img> : <CiImageOn style={{ opacity:'0.5',width: '100px', height: '150px',margin: '10px auto'}}/>}
              </div></CastCard>
            )
        })}
       </CastList>
      );
}

export default Cast