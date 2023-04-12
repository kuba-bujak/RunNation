import { useState } from "react";
import axios from 'axios';

function ReviewAdd() {
    const [comment, setComment] = useState('');

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addReview(comment);
    }

    const addReview = async(comment) => {
        const response = await axios.post(('/api/reviews/new', {
            comment
        }));
        console.log(response);
        setComment('');
    }

    return (
        <form className="container review-container shadow" onSubmit={onSubmit}>
            <header className="form-header">
                    <h1>Dodaj komentarz</h1>
                </header>
            <textarea rows={5} placeholder="Komentarz" value={comment} onChange={handleChangeComment}></textarea>
            <button className="btn form-btn">Dodaj</button>
        </form>
    )
}

export default ReviewAdd;