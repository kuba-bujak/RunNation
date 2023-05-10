import ReviewShow from './ReviewShow';
import ReviewAdd from './ReviewAdd';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const authToken = localStorage.getItem('AuthToken');

function ReviewList({ eventId, reviews, updateReviewList, isAdmin }) {

    const createNewReview = async (comment) => {
        const response = await axios.post(`/api/events/${eventId}/reviews`, {comment} ,{
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });

        const updatedReview = [
            ...reviews,
            response.data
        ];
        updateReviewList(updatedReview);
    }

    const editReview = async (id, editedReview) => {
        await axios.put(`/api/events/${eventId}/reviews/${id}/edit`, {comment: editedReview} ,{
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });

        const updatedReviews = reviews.map((review) => {
            if (review._id === id) {
                return {
                    ...review,
                    comment: editedReview.comment
                }
            }
            return review;
        });
        updateReviewList(updatedReviews);
    }

    const deleteReview = async (id) => {
        await axios.delete(`/api/events/${eventId}/reviews/${id}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        const updatedReviews = reviews.filter((review) => {
            return review._id !== id;
        });

        updateReviewList(updatedReviews);
    }

    const displayReviews = [];
    if (reviews) {
        reviews.map(review => {
        return displayReviews.push(<ReviewShow review={review} key={review._id} onEdit={editReview} onDelete={deleteReview} isAdmin={isAdmin}/>)
    });
}
    return (
        <div>
            {authToken && <ReviewAdd onCreate={createNewReview} id={eventId}/>}
            <React.Fragment>
                {displayReviews.length ? displayReviews : <h2 className='comments-header'>Brak komentarzy</h2>}
            </React.Fragment>
        </div>
    )
}

export default ReviewList;