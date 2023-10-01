import { useLocation, useSearchParams} from "react-router-dom"
import { useState, useEffect } from "react";
import {SearchContainer, SearchResultList } from './Movies.styled'
import { fetchData } from "Helpers/Services";
import { LoadingSpinner } from "Helpers/Helpers";
import {DebounceInput} from 'react-debounce-input';
import FilmListItem from "components/FilmListItem/FilmListItem";

const Movies =() => {

const [movieData, setMovieData] = useState("");
const [searchParams, setSearchParams] = useSearchParams()
const movieTitle = searchParams.get("movieTitle") ?? ""
const location = useLocation()

const UpdateQueryString = (evt) =>{
  const movieTitleValue = evt.target.value;
  if(movieTitleValue === ""){
    return setSearchParams({})
  }
  setSearchParams({movieTitle: movieTitleValue})
}

    useEffect(() => {
      const urlPart = `search/movie?query=${movieTitle}`;
    
      const fetchMovieData = async () => {
        const data = await fetchData(urlPart);
        if (data) {
          setMovieData(data.results); 
        }
      };
    
      fetchMovieData();
    }, [movieTitle]);

      if (!movieData) {
        return <LoadingSpinner/>
      }

    return (
        <SearchContainer>     
        <DebounceInput 
        style={{ 
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          width: '300px',
          fontSize: '16px'}} 
       
        debounceTimeout={300} 
        onChange={UpdateQueryString}/>
<SearchResultList>
       <div>
    {movieData && movieData.map((film) => (
      <FilmListItem key={film.id} film={film} location={location} />
    ))}
  </div>
</SearchResultList>
</SearchContainer>
    )
}
export default Movies
