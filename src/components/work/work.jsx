import React, { Component } from 'react';
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
	componentDidMount() {
		const username = 'kaushiks90';
		const { sort } = this.state;

		fetch(`https://api.github.com/users/${username}/repos?sort=${sort}&per_page=100`)
			.then((res) => res.json())
			.then((data) => {
				this.setState({ repos: data });
			})
			.catch((err) => console.log(err));

		for (let i = 1; i < 100; i++) {
			fetch(`http://www.splashbase.co/api/v1/images/${i}`)
				.then((res) => res.json())
				.then((data) => {
					this.setState({ images: [ ...this.state.images, data.url ] });
				})
				.catch((err) => console.log(err));
		}
	}

	render() {
		const { repos, images } = this.state;
		const repoItems = repos.map((repo, index) => (
			<div key={repo.id} className="item">
				<a href="#!">
					<img src={images[index]} alt="Project" />
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

export default Work;
