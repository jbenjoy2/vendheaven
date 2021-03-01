import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './Greeting';
import './Reeses.css';
import reeses from './static/reeses.gif';

const Reeses = () => {
	return (
		<div className="Reeses">
			<div className="Reeses-images">
				<img src={`${reeses}`} alt="reeses gif" />
				<img src="https://i.imgflip.com/2j09yz.jpg" alt="reeses spidey meme" />
				<img src={`${reeses}`} alt="reeses gif" />
			</div>
			<Greeting>
				<h2>
					<Link to="/">Back to VendHeaven</Link>
				</h2>
			</Greeting>
		</div>
	);
};

export default Reeses;
