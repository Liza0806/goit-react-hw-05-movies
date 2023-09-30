import { CiImageOn } from 'react-icons/ci'
import { FcCamcorderPro } from 'react-icons/fc';
import {
  DetailsContainer, 
  ContentContainer, 
  MovieTitle, 
  UserScore, 
  ReleaseDate, 
  Overview,
  Bold,
  MainImg, 
  GenresList,
  ProductionCompanyList,
  ProductionCompanyCard,
} from "./AboutFilm.styled"

export const AboutFilmMain = ({movieData}) => {
    return(
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
  </DetailsContainer>)
}

export const AboutFilmGenres = ({movieData}) => {
    return (<GenresList>
           <Bold>Genres: </Bold> 
            {movieData.genres.map((gen) => (
              <li key={gen.id}>{gen.name}</li>
            ))}
          </GenresList> )
}

export const AboutFilmProdactionCompanies = ({movieData}) => {

    return (
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
    )

}