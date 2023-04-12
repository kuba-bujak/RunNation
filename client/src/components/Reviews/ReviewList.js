import ReviewShow from './ReviewShow';
import ReviewAdd from './ReviewAdd';

function ReviewList() {
    return (
        <div>
            <ReviewAdd />
            <ReviewShow />
            <ReviewShow />
            <ReviewShow />
        </div>
    )
}

export default ReviewList;