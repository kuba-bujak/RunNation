import CourseShow from "./CourseShow";
import React from "react";

function CourseList({ courses, registerUser, currentUser }) {
	const displayCourses = courses.map(course => {
		return (
			<CourseShow key={course._id} course={course} registerUser={registerUser} currentUser={currentUser} />
		)
	})
	return (
		<div className="courses-box">
			<React.Fragment>
				{displayCourses}
			</React.Fragment>
      </div>
	)
}

export default CourseList;