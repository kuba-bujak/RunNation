import ReviewButtons from "./ReviewButtons";
import { useState } from "react";

function ReviewShow({ review, onEdit, onDelete, isAdmin }) {
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [comment, setComment] = useState(review.comment);
    const handleIsEditClicked = (event) => {
        event.preventDefault();
        setIsEditClicked(!isEditClicked);
        if(isEditClicked) {
            onEdit(review._id, comment);
        }
    }

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    const handleDeleteClicked = (event) => {
        event.preventDefault();
        onDelete(review._id);
    }

    return (
        <div className="comment-container">
            <div className="comment-container__image">
                {review.author.avatar 
                    ? 
                <div className="comment-avatar" style={{ background: `url(${review.author.avatar}) no-repeat center / cover` }}></div>
                    :
                <div className="comment-avatar" style={{ background: `url(https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600w-1095249842.jpg)  no-repeat center / cover` }}></div>
                }
                <div className="comment-author">
                    @{review.author.username}
                </div>
                <div className="comment-role">
                    {review.author.role}
                </div>
            </div>
            <div className="comment-container__content">
                {isEditClicked 
                    ? <textarea value={comment} onChange={handleChangeComment} className="content-textarea" rows={10}></textarea>
                    : <div className="content-text">{comment} </div>}
                <div className="time">
                    {review.createdAt}
                </div>
                {isAdmin && <ReviewButtons editClicked={handleIsEditClicked} onDelete={handleDeleteClicked}/>}
            </div>
        </div>
    )
}

export default ReviewShow;