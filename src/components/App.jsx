import { Route, Routes } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
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
     maxWidth: '1280px',
     margin: 'auto',
     padding:'0',
     justifyContent: 'center',
     alignItems: 'center',
     color: '#010101'
      }}
    > 
       <ToastContainer />
   
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
