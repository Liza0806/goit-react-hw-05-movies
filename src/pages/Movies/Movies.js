import { Link, useLocation, useSearchParams} from "react-router-dom"
import { useState, useEffect } from "react";
import {SearchContainer, SearchResultList, SearchResultItem} from './Movies.styled'
import { fetchData } from "Helpers/Helpers";
import { LoadingSpinner } from "Helpers/Helpers";
import {DebounceInput} from 'react-debounce-input';
import { FcCamcorderPro } from 'react-icons/fc';
import Popup from 'reactjs-popup';


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
      const url = `
      https://api.themoviedb.org/3/search/movie?query=${movieTitle}`;
    
      const fetchMovieData = async () => {
        const data = await fetchData(url);
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
        {movieData && movieData.map((film) => (
     
      <SearchResultItem key={film.id}>   <Popup
      trigger={ open => ( <Link to={`/${film.id}`} state ={{ from: location}} key={film.id}>{film.title}</Link> )}
      position="right center"
      on={['hover', 'focus']}
      closeOnDocumentClick
    >
      <span> {film.poster_path? (<img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="Tooltip Image" width={"200"}/>): (
  <FcCamcorderPro style={{ width: '100px', height: '100px' }} />
)}</span>
    </Popup>  </SearchResultItem>
    ))}
</SearchResultList>
</SearchContainer>
    )
}
export default Movies
