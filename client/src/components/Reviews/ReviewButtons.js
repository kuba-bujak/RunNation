function ReviewButtons({ editClicked, onDelete }) {
    return (
        <form className="card-footer">
            <button className="event-btn edit-btn" onClick={editClicked}>Edytuj</button>
            <button className="event-btn delete-btn" onClick={onDelete}>Usuń</button>
        </form>
    )
}

export default ReviewButtons;