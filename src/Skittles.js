import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './Greeting';
import './Skittles.css';
import rainbowImg from './static/rainbow.jpg';

const Skittles = () => {
	return (
		<div
			className="Skittles"
			style={{
				backgroundImage : `url(${rainbowImg})`
			}}
		>
			<Greeting>
				<h1 className="Skittles-header">SKITTLES</h1>
			</Greeting>
			<Greeting>
				<h2>
					<Link to="/">Back to VendHeaven</Link>
				</h2>
			</Greeting>
		</div>
	);
};

export default Skittles;
