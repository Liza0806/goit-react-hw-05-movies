import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { FcCamcorderPro } from 'react-icons/fc';
import { FilmPopupContent } from './FilmListItem.styled';

const FilmListItem = ({ film, location }) => (
  <FilmPopupContent>
    <Popup
      trigger={open => (
        <Link to={`/${film.id}`} state={{ from: location }} className='list'>
          {film.title ?? film.name}
        </Link>
      )}
      position="right center"
      on={['hover', 'focus']}
      closeOnDocumentClick
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      >
        {film.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title ?? film.name}
            width={300}
          />
        ) : (
          <FcCamcorderPro style={{ width: '100px', height: '100px' }} />
        )}
      </div>
    </Popup>
  </FilmPopupContent>
);

export default FilmListItem;