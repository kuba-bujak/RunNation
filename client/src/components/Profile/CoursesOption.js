import ProfileCourse from "./ProfileCourse";

function CoursesOption({ courses }) {
	return (
		<div className="profile-content profile-hidden" data-title="courses">
			<header>
				<h1 className='profile-header'>Kursy</h1>
			</header>
			<div className="profile-info">
				{courses.map(course => (
					<ProfileCourse course={course}/>
				))}
			</div>
		</div>
	)
}

export default CoursesOption;