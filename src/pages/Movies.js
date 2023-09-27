import { Link, useSearchParams} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";


const Movies =() => {

   const [movieData, setMovieData] = useState(null);
 const [searchParams, setSearchParams] = useSearchParams()
const movieTitle = searchParams.get("movieTitle")
console.log(movieTitle)

    useEffect(() => {
        const fetchData = async () => {
                  try {  
    const response = await axios.get(`
       https://api.themoviedb.org/3/search/movie?query=${movieTitle}`, 
       {
        headers: {
        Accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQwOGNhMTljY2JmM2U1MjgwN2ViZmVjZDEwOGUzNiIsInN1YiI6IjY1MTJiYjFkYTkxMTdmNzY1ZDg4OTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wk5fdIqZPgG2xDOolV97Xo9axot0ymipWFnQCS9z3XQ' 
        },
      });  
      setMovieData(response.data.results); 
    } catch (error) {
               console.error('Error:', error);
             }}

      fetchData();
       
      }, [movieTitle]);




    return (
        <div>     
        <input type="text" onChange={evt=> setSearchParams({movieTitle: evt.target.value})}></input>

        {movieData && movieData.map((film) => (
      <Link to={`/${film.id}`} key={film.id}>{film.title}</Link>
    ))}

</div>
    )
}
export default Movies