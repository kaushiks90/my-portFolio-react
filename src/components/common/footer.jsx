import React, { Component } from 'react';
import { apiEndpoint } from '../../config.json';
class Footer extends Component {
	download() {
		setTimeout(() => {
			const response = {
				file: `${apiEndpoint + '/download'}`
			};
			window.location.href = response.file;
		}, 100);
	}
	render() {
		return (
			<div>
				<footer id="main-footer">
					<span> Copyright &copy; 2019</span>

					<button onClick={this.download} className="contact-form-btn">
						Download Resume{' '}
					</button>
				</footer>
			</div>
		);
	}
}

export default Footer;
