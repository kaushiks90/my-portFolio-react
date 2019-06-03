import React from 'react';
import './skill.scss';

const Skill = () => {
	return (
		<main id="skill">
			<h1 className="lg-heading">
				My
				<span className="text-secondary">Skills</span>
			</h1>
			<div className="text-secondary-center">
				<span className="text-secondary">
					<i className="fab fa-microsoft" /> Microsoft Technologies
				</span>
			</div>

			<ul>
				<li>
					<a className="list-item" href="#!">
						C#
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						MVC
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						Web Api
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						.NetCore
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						Entity Framework
					</a>
				</li>
			</ul>
			<br />
			<div className="text-secondary-center">
				<span className="text-secondary">
					<i className="fab fa-js" /> Javascript Frameworks
				</span>
			</div>
			<ul>
				<li>
					<a className="list-item" href="#!">
						Node Js
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						React Js
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						Jquery
					</a>
				</li>
			</ul>
			<br />
			<div className="text-secondary-center">
				<span className="text-secondary">
					<i className="fas fa-database" /> Database
				</span>
			</div>
			<ul>
				<li>
					<a className="list-item" href="#!">
						SQL Server
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						Oracle
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						MongoDb
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						Postgress
					</a>
				</li>
			</ul>
			<br />
			<div className="text-secondary-center">
				<span className="text-secondary">
					<i className="fas fa-cloud" /> Cloud
				</span>
			</div>
			<ul>
				<li>
					<a className="list-item" href="#!">
						AWS
					</a>
				</li>
			</ul>
			<br />
			<div className="text-secondary-center">
				<span className="text-secondary ">
					<i className="fab fa-dochub" /> Devops
				</span>
			</div>
			<ul>
				<li>
					<a className="list-item" href="#!">
						Docker
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						CI/CD
					</a>
				</li>
			</ul>
			<br />
			<div className="text-secondary-center">
				<span className="text-secondary ">
					<i className="fas fa-code-branch" /> SourceControl & Version Control
				</span>
			</div>
			<ul>
				<li>
					<a className="list-item" href="#!">
						VSTS
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						GIT
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						TFS
					</a>
				</li>
				<li>
					<a className="list-item" href="#!">
						SVN
					</a>
				</li>
			</ul>
		</main>
	);
};
export default Skill;
