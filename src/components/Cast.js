import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";


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
    return (
        castData.map(person => {
            return(
                <div key={person.id}>
                <h1>{person.character}</h1>
                <p>{person.name}</p>
             
              </div>
            )
        })
       
      );
}

export default Cast