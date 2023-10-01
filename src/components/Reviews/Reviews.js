import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { ReviewContainer, Author, Content, NoReviews } from './Reviews.styled'
import { fetchData } from "Helpers/Services";
import { LoadingSpinner } from "Helpers/Helpers";


const Reviews = () => {
    const {movieId} = useParams();
  
    const [reviewsData, setReviewsData] = useState(null);
    useEffect(() => {
      const urlPart = `movie/${movieId}/reviews?`;
    
      async function fetchRevData() {
        try {
          const data = await fetchData(urlPart);
          if (data) {
            setReviewsData(data.results);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    
      fetchRevData();
    }, [movieId]);
    

      if (!reviewsData) {
       return <LoadingSpinner/>
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