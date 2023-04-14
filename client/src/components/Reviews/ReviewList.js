import ReviewShow from './ReviewShow';
import ReviewAdd from './ReviewAdd';
import React, { useState } from 'react';

function ReviewList({ eventId }) {
    const [reviewList, setReviewList] = useState([
        {
            id: 1,
            username: 'kuba.b',
            role: 'Zawodnik',
            comment: 'To jest mój super komentarz',
            date: '01-01-2023'
        },
        {
            id: 2,
            username: 'sprinterzy.com',
            role: 'Trener',
            comment: 'Nie znamy się na niczym ale się wypowiemy',
            date: '10-01-2023'
        },
        {
            id: 3,
            username: 'Kamil Kobiałka',
            role: 'Trener',
            comment: '@sprinterzy.com chuj wam w dupe!',
            date: '11-01-2023'
        }
    ]);

    const createNewReview = (newReview) => {
            setReviewList([
                ...reviewList,
                {
                    id: Math.floor(Math.random() * 99),
                    username: 'test',
                    role: 'Kibic',
                    comment: newReview,
                    date: '12-04-2023'
                }
            ]);
    }

    const editReview = (id, editedReview) => {
        const updatedReviews = reviewList.map((review) => {
            if (review.id === id) {
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
            return review.id !== id;
        });

        setReviewList(updatedReviews);
    }

    const displayReviews = reviewList.map(review => {
        return (<ReviewShow review={review} key={review.id} onEdit={editReview} onDelete={deleteReview} />)
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