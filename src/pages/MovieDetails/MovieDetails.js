import { Outlet, useParams, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import { fetchData } from "Helpers/Helpers";
import { LoadingSpinner } from "Helpers/Helpers";
import { BackLink, ForLinks } from "./MovieDetails.styled";
import { 
  AboutFilmMain, 
  AboutFilmGenres,
  AboutFilmProdactionCompanies } from "components/AboutFilm/AboutFilm";

const MovieDetails = () => {

    const {movieId} = useParams();
    const location = useLocation();
    const [movieData, setMovieData] = useState(null);
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
      const url = `
      https://api.themoviedb.org/3/movie/${movieId}`; 
    
      const fetchMDData = async () => {
        const data = await fetchData(url);
        if (data) {
          setMovieData(data);  
        }
      };
    
      fetchMDData();
    }, [movieId]);


      if (!movieData) {
        return <LoadingSpinner/>
      }


   
  return (
    <div> 
    <AboutFilmMain movieData={movieData}/>
    <AboutFilmGenres movieData={movieData}/>
    
     
          
          {movieData.production_companies.length > 0 ? (
        <AboutFilmProdactionCompanies movieData={movieData}/>
) : null}
       
      <div>
      <ForLinks><BackLink to="cast">Cast</BackLink>
        <BackLink to="reviews">Reviews</BackLink>
        <BackLink to={backLinkLocationRef.current}>Back</BackLink></ForLinks>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetails

