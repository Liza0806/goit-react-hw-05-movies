import { Link, Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetails = () => {

    const {movieId} = useParams();
  
    const [movieData, setMovieData] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
                  try {  
    const response = await axios.get(`
       https://api.themoviedb.org/3/movie/${movieId}`, 
       {
        headers: {
        Accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQwOGNhMTljY2JmM2U1MjgwN2ViZmVjZDEwOGUzNiIsInN1YiI6IjY1MTJiYjFkYTkxMTdmNzY1ZDg4OTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wk5fdIqZPgG2xDOolV97Xo9axot0ymipWFnQCS9z3XQ' 
        },
      });  
      setMovieData(response.data); 
    } catch (error) {
               console.error('Error:', error);
             }}

      fetchData();
       
      }, [movieId]);


      if (!movieData) {
     
        return <div>Loading...</div>;
      }
    //  console.log(movieData.cast)


    return (
        <div style={{ display: "flex" }}>
        <div>
            <h1>{movieData.title}</h1>
        <p>{movieData.overview}</p>
        </div>
      
        <div><Link to="cast">Cast</Link></div>
        <div><Link to="reviews">Reviews</Link></div>
  
     <Link to="/">Back</Link> 
        <Outlet/>
      </div>
      );

}

export default MovieDetails

