import { Outlet, useParams, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import { FcCamcorderPro } from 'react-icons/fc';
import { fetchData } from "Helpers/Helpers";
import { LoadingSpinner } from "Helpers/Helpers";
import { CiImageOn } from 'react-icons/ci'
import {
  DetailsContainer, 
  ContentContainer, 
  MovieTitle, 
  UserScore, 
  ReleaseDate, 
  Overview, GenresList, 
  BackLink,
  Bold,
  MainImg,
  ForLinks,
  ProductionCompanyList,
  ProductionCompanyCard
} from "./MovieDetails.styled"

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
      <DetailsContainer>
        <ContentContainer>
          <MovieTitle>{movieData.title}</MovieTitle>
          <UserScore> <Bold>User score: </Bold>{movieData.popularity}</UserScore>
          <ReleaseDate>Release date: {movieData.release_date}</ReleaseDate>
          <Overview><Bold>Overview:</Bold> {movieData.overview}</Overview>
        </ContentContainer>
        <div>
  {movieData.poster_path ? (
    <MainImg src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} />
  ) : (
    <CiImageOn style={{ opacity: '0.5', width: '100px', height: '150px', margin: '10px auto' }} />
  )}
</div>
      </DetailsContainer>
       <GenresList>
           <Bold>Genres: </Bold> 
            {movieData.genres.map((gen) => (
              <li key={gen.id}>{gen.name}</li>
            ))}
          </GenresList> 
          
          {movieData.production_companies.length > 0 ? (
  <div>
    <Bold>Production companies:</Bold>
    <ProductionCompanyList>
      {movieData.production_companies.map((prod) => (
        <ProductionCompanyCard key={prod.id}>
          <div>
            {prod.logo_path ? (
              <img
                src={`https://image.tmdb.org/t/p/original/${prod.logo_path}`}
                alt={prod.name}
              />
            ) : (
              <FcCamcorderPro style={{ width: '100px', height: '100px' }} />
            )}
          </div>
          <div>{prod.name}</div>
        </ProductionCompanyCard>
      ))}
    </ProductionCompanyList>
  </div>
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

