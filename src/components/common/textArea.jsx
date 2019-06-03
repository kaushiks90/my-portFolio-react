import React from 'react';

const TextArea = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			{/* <label htmlFor={name}>{label}</label> */}
			<textarea className="contact-form-text" {...rest} name={name} id={name} placeholder={label} />
			{error && <div className="alert-danger">{error}</div>}
		</div>
	);
};

export default TextArea;
