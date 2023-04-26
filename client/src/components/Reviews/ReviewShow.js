import ReviewButtons from "./ReviewButtons";
import { useState } from "react";

function ReviewShow({ review, onEdit, onDelete, isAdmin }) {
    const [isEditClicked, setIsEditClicked] = useState(false);
    const [comment, setComment] = useState(review.comment);
    const [showModal, setShowModal] = useState(false);
    const [isDeleteClicked, setIsDeleteClicked] = useState(false);

    const handleIsEditClicked = (event) => {
        event.preventDefault();
        setIsEditClicked(!isEditClicked);
        if(isEditClicked) {
            onEdit(review._id, comment);
        }
    }

    const handleModalClose = () => setShowModal(false);

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    // const handleDeleteClicked = (event) => {
    //     event.preventDefault();
    //     onDelete(review._id);
    // }

    const handleIsDeleteClicked = () => {
        setShowModal(true);
    }

    return (
        <div className="comment-container">
            <div className="comment-container__image">
                <div className="comment-avatar"></div>
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
                {isAdmin && <ReviewButtons editClicked={handleIsEditClicked} isDeleteClicked={handleIsDeleteClicked}/>}
                <Modal
                        className="modal"
                        show={showModal}
                        onHide={handleModalClose}
                        renderBackdrop={renderBackdrop}
                    >
                        <ModalShow onClose={handleModalClose} onDelete={deleteEvent} eventId={event._id}/>
                    </Modal>
            </div>
        </div>
    )
}

export default ReviewShow;