import { Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { FcCamcorderPro } from 'react-icons/fc';
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

// FcFilm

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
     console.log(movieData)


   
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
          <MainImg src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} />
        </div>
      </DetailsContainer>
       <GenresList>
           <Bold>Genres: </Bold> 
            {movieData.genres.map((gen) => (
              <li key={gen.id}>{gen.name}</li>
            ))}
          </GenresList> 
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
          </ProductionCompanyList></div>
      <div>
      <ForLinks><BackLink to="cast">Cast</BackLink>
        <BackLink to="reviews">Reviews</BackLink>
        <BackLink to="/">Back</BackLink></ForLinks>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetails

