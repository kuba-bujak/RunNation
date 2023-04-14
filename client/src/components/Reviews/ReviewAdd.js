import { useState } from "react";
import axios from 'axios';

function ReviewAdd({ onCreate, id }) {
    const [comment, setComment] = useState('');

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    const createReview = async (comment) => {
        const response = await axios.post(`/api/events/${id}/reviews`, {
            comment
        });

        console.log(response);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createReview(comment);
        onCreate(comment);
        setComment('');
    }

    return (
        <form className="container review-container shadow" onSubmit={handleSubmit}>
            <header className="form-header">
                    <h1>Dodaj komentarz</h1>
                </header>
            <textarea rows={5} placeholder="Komentarz" value={comment} onChange={handleChangeComment}></textarea>
            <button className="btn form-btn">Dodaj</button>
        </form>
    )
}

export default ReviewAdd;