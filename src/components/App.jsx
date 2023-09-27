import { Route, Routes } from "react-router-dom";

import HomePage from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Layout from "./Layout";
import Cast from "./Cast";
import Reviews from "./Reviews";

export const App = () => {




  return (
    <div
      style={{
      //  height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      //  fontSize: 40,
        color: '#010101'
      }}
    > 
   
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path="movies" element={<Movies/>}/>
      <Route path="movies/:movieId" element={<MovieDetails/>}/>
      <Route path=":movieId" element={<MovieDetails/>}>
         <Route path="cast" element={<div><Cast/></div>}/>
         <Route path="reviews" element={<div><Reviews/></div>}/>
  </Route>
  </Route>
    </Routes>
    </div>
  );
};
