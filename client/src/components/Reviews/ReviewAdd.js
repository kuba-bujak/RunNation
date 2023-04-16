import { useState } from "react";

function ReviewAdd({ onCreate, id }) {
    const [comment, setComment] = useState('');

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
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