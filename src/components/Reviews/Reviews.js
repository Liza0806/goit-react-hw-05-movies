import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { ReviewContainer, Author, Content, NoReviews } from './Reviews.styled'
import { ColorRing } from  'react-loader-spinner'

const Reviews = () => {
    const {movieId} = useParams();
  
    const [reviewsData, setReviewsData] = useState(null);
    useEffect(() => {
        const fetchReviewsData = async () => {
                  try {  
    const response = await axios.get(`
       https://api.themoviedb.org/3/movie/${movieId}/reviews?`, 
       {
        headers: {
        Accept: 'application/json',
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQwOGNhMTljY2JmM2U1MjgwN2ViZmVjZDEwOGUzNiIsInN1YiI6IjY1MTJiYjFkYTkxMTdmNzY1ZDg4OTgxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wk5fdIqZPgG2xDOolV97Xo9axot0ymipWFnQCS9z3XQ' 
        },
      });  
      console.log(response.data)
      setReviewsData(response.data.results); 
    } catch (error) {
               console.error('Error:', error);
             }}

      fetchReviewsData();
       
      }, [movieId]);


      if (!reviewsData) {
     
        return <div>
            <ColorRing
        visible={true}
        height="180"
        width="180"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
        </div>;
      }

      console.log(reviewsData)
      return (
        <div>
          {reviewsData.length === 0 ? (
            <NoReviews>No reviews</NoReviews>
          ) : (
            reviewsData.map((review) => (
              <ReviewContainer key={review.id}>
                <Author>{review.author}</Author>
                <Content>{review.content}</Content>
              </ReviewContainer>
            ))
          )}
        </div>
      );
}

export default Reviews