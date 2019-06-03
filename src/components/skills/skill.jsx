import React, { Component } from 'react';
import SubSkill from './subSkill';
import './skill.scss';

class Skill extends Component {
	state = {
		skills: [
			{
				name: 'Microsoft',
				values: [ 'C#', 'MVC', 'Web Api', '.NetCore', 'Entity Framework' ]
			},
			{
				name: 'Javascript',
				values: [ 'Node js', 'React js', 'Jquery' ]
			},
			{
				name: 'Database',
				values: [ 'SQL Server', 'Oracle', 'MongoDb', 'Postgress' ]
			},
			{
				name: 'Cloud',
				values: [ 'AWS' ]
			},
			{
				name: 'Devops',
				values: [ 'Docker', 'CI/CD' ]
			},
			{
				name: 'SourceControl',
				values: [ 'VSTS', 'GIT', 'TFS', 'SVN' ]
			}
		]
	};
	render() {
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
				<SubSkill skills={this.state.skills} skillName="Microsoft" />
				<br />
				<div className="text-secondary-center">
					<span className="text-secondary">
						<i className="fab fa-js" /> Javascript Frameworks
					</span>
				</div>
				<SubSkill skills={this.state.skills} skillName="Javascript" />
				<br />
				<div className="text-secondary-center">
					<span className="text-secondary">
						<i className="fa fa-database" /> Database
					</span>
				</div>
				<SubSkill skills={this.state.skills} skillName="Database" />
				<br />
				<div className="text-secondary-center">
					<span className="text-secondary">
						<i className="fa fa-cloud" /> Cloud
					</span>
				</div>
				<SubSkill skills={this.state.skills} skillName="Cloud" />
				<br />
				<div className="text-secondary-center">
					<span className="text-secondary ">
						<i className="fab fa-dochub" /> Devops
					</span>
				</div>
				<SubSkill skills={this.state.skills} skillName="Devops" />
				<br />
				<div className="text-secondary-center">
					<span className="text-secondary ">
						<i className="fas fa-code-branch" /> SourceControl & Version Control
					</span>
				</div>
				<SubSkill skills={this.state.skills} skillName="SourceControl" />
			</main>
		);
	}
}
export default Skill;
