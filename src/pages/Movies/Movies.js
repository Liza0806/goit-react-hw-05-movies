import { Link, useSearchParams} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import {SearchContainer, SearchInput, SearchResultList, SearchResultItem} from './Movies.styled'


const Movies =() => {
const [movieData, setMovieData] = useState("");
const [searchParams, setSearchParams] = useSearchParams()
const movieTitle = searchParams.get("movieTitle") ?? ""
console.log(movieTitle)

const UpdateQueryString = (evt) =>{
  const movieTitleValue = evt.target.value;
  if(movieTitleValue === ""){
    return setSearchParams({})
  }
  
  setSearchParams({movieTitle: movieTitleValue})

}
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
        <SearchContainer>     
        <SearchInput type="text" onChange={UpdateQueryString}></SearchInput>
<SearchResultList>
        {movieData && movieData.map((film) => (
     
      <SearchResultItem key={film.id}><Link to={`/${film.id}`} key={film.id}>{film.title}</Link></SearchResultItem>
    ))}
</SearchResultList>
</SearchContainer>
    )
}
export default Movies