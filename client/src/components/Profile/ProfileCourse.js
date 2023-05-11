import { useEffect, useState } from "react";

function ProfileCourse({ course }) {
	const [date, setDate] = useState('');

	useEffect(() => {
		formatDate();
	}, []);

	const formatDate = () => {
		let dayFrom, monthFrom, yearFrom, dayTo, monthTo, yearTo;
		const dateFrom = new Date(course.dateFrom);
		const dateTo = new Date(course.dateTo);

		dayFrom = dateFrom.getDate();
		monthFrom = dateFrom.getMonth() + 1;
		yearFrom = dateFrom.getFullYear();

		dayFrom = dayFrom
        .toString()
        .padStart(2, '0');

		monthFrom = monthFrom
        .toString()
        .padStart(2, '0');

		dayTo = dateTo.getDate();
		monthTo = dateTo.getMonth() + 1;
		yearTo = dateTo.getFullYear();

		dayTo = dayTo
        .toString()
        .padStart(2, '0');

		monthTo = monthTo
        .toString()
        .padStart(2, '0');

		setDate(`${dayFrom}.${monthFrom}.${yearFrom} - ${dayTo}.${monthTo}.${yearTo}`);
	}
	return (
		<div className="course-profile-element">
			<div className="course--container">
				<header className="course--header course--header--added">
					<h3 className="course--title">{course.title}</h3>
				</header>
				<div className="course--details">
					<div className="course--details-element">
							<i className="fa-solid fa-calendar-days"></i>
							{date}
					</div>
					<div className="course--details-element">
							<i className="fa-solid fa-clock"></i>
							{course.hoursFrom} - {course.hoursTo}
					</div>
					<div className="course--details-element">
							<i className="fa-solid fa-earth-americas"></i>
							Język: {course.language}
					</div>
					<div className="course--details-element">
							<i className="fa-solid fa-chart-simple"></i>
							{course.level}
					</div>
					<div className="course--details-element">
							<i className="fa-solid fa-location-dot"></i>
							{course.location}
					</div>
					<div className="course--details-element">
							<i className="fa-solid fa-user"></i>
							Trener: {course.coach}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileCourse;