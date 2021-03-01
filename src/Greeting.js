import React from 'react';
import './Greeting.css';

const Greeting = ({ children }) => {
	return <div className="Greeting">{children}</div>;
};

export default Greeting;
