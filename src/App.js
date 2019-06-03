import React, { Component } from 'react';
import './App.scss';
import Headers from './components/common/header';
import Footer from './components/common/footer';
import { getRepositories, getImages } from '../src/actions/workActions';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Work from './components/work/work';
import Skill from './components/skills/skill';
import ContactMe from './components/contact/contactMe';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Analytics from 'react-router-ga';

class App extends Component {
	componentDidMount() {
		this.props.getImages();
		this.props.getRepositories();
	}

	render() {
		return (
			<div className="App">
				<Headers />
				<Analytics id="UA-940883235-9">
					<Switch>
						<Route path="/home" component={Home} /> <Route path="/about" component={About} />
						<Route path="/contactMe" component={ContactMe} /> <Route path="/work" component={Work} />
						<Route path="/skill" component={Skill} /> <Redirect from="/" exact to="/home" />
					</Switch>
				</Analytics>
				<Footer> </Footer>
			</div>
		);
	}
}
App.propTypes = {
	getRepositories: PropTypes.func.isRequired,
	getImages: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	Work: state.work
});
export default connect(mapStateToProps, { getRepositories, getImages })(App);
