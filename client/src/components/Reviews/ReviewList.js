import ReviewShow from './ReviewShow';
import ReviewAdd from './ReviewAdd';
import React, { useState } from 'react';
import axios from 'axios';

function ReviewList({ eventId, reviews }) {
    const [reviewList, setReviewList] = useState([]);

    const createNewReview = async (comment) => {
           const response = await axios.post(`/api/events/${eventId}/reviews`, {
            comment
           });
           console.log(response);
    }

    const editReview = (id, editedReview) => {
        const updatedReviews = reviewList.map((review) => {
            if (review._id === id) {
                return {
                    comment: editedReview.comment
                }
            }
            return review;
        });
        setReviewList(updatedReviews);
    }

    const deleteReview = (id) => {
        const updatedReviews = reviewList.filter((review) => {
            return review._id !== id;
        });

        setReviewList(updatedReviews);
    }

    const displayReviews = reviewList.map(review => {
        return (<ReviewShow review={review} key={review._id} onEdit={editReview} onDelete={deleteReview} />)
    })

    return (
        <div>
            <ReviewAdd onCreate={createNewReview} id={eventId}/>
            <React.Fragment>
                {displayReviews.reverse()}
            </React.Fragment>
        </div>
    )
}

export default ReviewList;