import ReviewButtons from "./ReviewButtons";
import { useEffect, useState } from "react";

function ReviewShow({ review, onEdit, onDelete }) {
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [comment, setComment] = useState(review.comment)

    const handleIsEditClicked = (event) => {
        event.preventDefault();
        setIsEditClicked(!isEditClicked);
        onEdit(comment);
    }

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    const handleDeleteClicked = (event) => {
        event.preventDefault();
        onDelete(review.id);
    }

    return (
        <div className="comment-container">
            <div className="comment-container__image">
                <div className="comment-avatar"></div>
                <div className="comment-author">
                    @{review.username}
                </div>
                <div className="comment-role">
                    {review.role}
                </div>
            </div>
            <div className="comment-container__content">
                {isEditClicked 
                    ? <textarea value={comment} onChange={handleChangeComment} className="content-textarea" rows={10}></textarea>
                    : <div className="content-text">{comment} </div>}
                <div className="time">
                    {review.date}
                </div>
                <ReviewButtons editClicked={handleIsEditClicked} onDelete={handleDeleteClicked}/>
            </div>
        </div>
    )
}

export default ReviewShow;