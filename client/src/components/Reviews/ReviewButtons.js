function ReviewButtons({ editClicked, isDeleteClicked }) {
    return (
        <form className="card-footer">
            <button className="event-btn edit-btn" onClick={editClicked}>Edytuj</button>
            <button className="event-btn delete-btn" onClick={isDeleteClicked}>Usuń</button>
        </form>
    )
}

export default ReviewButtons;