import React, { Component } from 'react';
import { connect } from 'react-redux';

class Work extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: 'https://loremflickr.com/320/240',
			sort: 'created: asc',
			repos: [],
			images: []
		};
	}

	render() {
		const { repositories: repos, projectImages: images } = this.props.Work;

		const repoItems = repos.map((repo, index) => (
			<div key={repo.id} className="item">
				<a href="#!">
					<img
						src={images[index]}
						alt="Project"
						onError={(e) => {
							e.target.onerror = null;
							e.target.src = images[index];
						}}
					/>
					{/* <img src={images[index]} alt="Project" /> */}
				</a>
				<a href={repo.html_url} className="btn-light" target="_blank" rel="noopener noreferrer">
					<i className="fas fa-eye" /> {repo.name}
				</a>
				<a href="https://github.com/kaushiks90" className="btn-dark" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-github" /> Github
				</a>
			</div>
		));
		return (
			<main id="work">
				<h1 className="lg-heading">
					My
					<span className="text-secondary">Work</span>
				</h1>
				<h2 className="sm-heading">Check out some of my projects...</h2>
				<div className="projects">{repoItems}</div>
			</main>
		);
	}
}

const mapStateToProps = (state) => ({
	Work: state.work
});
export default connect(mapStateToProps, {})(Work);
