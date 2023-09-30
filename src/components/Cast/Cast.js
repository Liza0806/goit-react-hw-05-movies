import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import {CastList,  CastCard} from "./Cast.styled";
import { CiImageOn } from 'react-icons/ci'
import { fetchData } from "Helpers/Helpers";
import { LoadingSpinner } from "Helpers/Helpers";


const Cast = () => {
    const {movieId} = useParams();
    const [castData, setCastData] = useState(null);

    useEffect(() => {
      const url = `
        https://api.themoviedb.org/3/movie/${movieId}/credits?`;
  
      const fetchCastData = async () => {
        const data = await fetchData(url);
        if (data) {
          setCastData(data.cast);
        }
      };
  
      fetchCastData();
    }, [movieId]);

      if (!castData) { 
        return <LoadingSpinner/>
      }

     // console.log(castData)
    
     return (
      <div>
        {castData.length > 0 ? (
          <CastList>
            {castData.map(person => (
              <CastCard key={person.id}>
                <div key={person.id}>
                  <h1>{person.name}</h1>
                  <p>{person.character}</p>
                  {person.profile_path ? (
                    <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
                  ) : (
                    <CiImageOn style={{ opacity: '0.5', width: '100px', height: '150px', margin: '10px auto' }} />
                  )}
                </div>
              </CastCard>
            ))}
          </CastList>
        ) : (
          <div>No cast available</div>
        )}
      </div>
    );
  };

export default Cast