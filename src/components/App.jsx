import { Route, Routes } from "react-router-dom";

//import HomePage from "pages/Home/Home";
//import Movies from "pages/Movies/Movies";
//import MovieDetails from "pages/MovieDetails/MovieDetails";

import Layout from "./Layout/Layout";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { lazy } from "react";


const HomePage = lazy(() => import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))

export const App = () => {




  return (
    <div
      style={{
     height: '100vh',
    // display: 'flex',
     margin: '0',
     padding:'0',
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
