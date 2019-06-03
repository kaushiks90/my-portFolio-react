import React from 'react';

const SubSkill = (props) => {
	return (
		<ul>
			{props.skills.filter((skill) => skill.name === props.skillName).map((s) =>
				s.values.map((x, id) => (
					<li key={id}>
						<a className="list-item" href="#!">
							{x}
						</a>
					</li>
				))
			)}
		</ul>
	);
};
export default SubSkill;
