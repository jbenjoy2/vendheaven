import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './Greeting';
import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div
			className="VendingMachine"
			style={{
				backgroundImage : `url('https://cdn.cnn.com/cnnnext/dam/assets/171004155619-singapore-vending-machine-chef-in-box-008-full-169.jpg')`
			}}
		>
			<Greeting>
				<h1>Welcome to VendHeaven! Please make a selection 🤤</h1>
			</Greeting>
			<Greeting>
				<h1>
					<Link className="VendingMachine-link" to="/cookies">
						Famous Amos
					</Link>
				</h1>
				<h1>
					<Link className="VendingMachine-link" to="/reeses">
						Reese's Peanut Butter Cups
					</Link>
				</h1>
				<h1>
					<Link className="VendingMachine-link" to="/skittles">
						Skittles
					</Link>
				</h1>
			</Greeting>
		</div>
	);
};

export default VendingMachine;
