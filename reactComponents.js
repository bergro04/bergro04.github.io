const e = React.createElement;

function CourseList(props) {
	if (props.courses == null) {
		return null;
	}

	cols = 3;
	let rows = [];
	let current = [];

	for (let i = 0; i < props.courses.length; i++) {
		current.push(e(
			'div',
			{
				className: 'col-xs-' + (12 / cols),
			},
			e('p', null, props.courses[i]),
		));
		if (current.length == cols) {
			rows.push(e(
				'div',
				{
					className: 'row',
				},
				...current,
			));
			current = [];
		}
	}

	if (current != []) {
		rows.push(current)
	}

	return e(
		'div',
		null,
		e('p', null, e('b', null, props.title + ":")),
		...rows,
	)
}

const courseListContainer = document.querySelector('#react-course-list');
ReactDOM.render(e(
	'div',
	null,
	e(
		CourseList,
		{
			title: "Courses relevant to Computer Science",
			courses: [
				'Algorithms and Data Structures',
				'Parallel and Distributed Computing',
				'Programming Languages',
				'Software Design',
				'Mobile Computing Applications',
				'Robotics',
				'Linear Algebra',
				'Operating Systems',
				'Intro to Data Science',
				'Statistics',
				'Intro to Mathematical Reasoning',
				'Hardware Design',
			],
		}
	),
	e(
		CourseList,
		{
			title: "In Progress",
			courses: [
				'Senior Capstone',
				'Statistical Computing',
			],
		}
	)
), courseListContainer);