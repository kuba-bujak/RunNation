function ModalShow({ onClose, onDelete, elementId }) {
	return (
		<div>
			<div className="modal-header">
				<div className="modal-title">Czy na pewno chcesz usunąć wydarzenie</div>
				<div>
					<span className="close-button" onClick={onClose}>
						x
					</span>
				</div>
			</div>
			<div className="modal-desc">
					<p>Tego kroku nie można cofnąć</p>
			</div>
			<div className="modal-footer">
				<button className="event-btn edit-btn" onClick={onClose}>
					Zamknij
				</button>
				<button className="event-btn delete-btn" onClick={() => onDelete(elementId)}>
					Usuń
				</button>
			</div>
		</div>	
	)
	
}

export default ModalShow