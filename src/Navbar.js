import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="Navbar">
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/cookies">
				Famous Amos
			</NavLink>
			<NavLink exact to="/reeses">
				Reese's Peanut Butter Cups
			</NavLink>
			<NavLink exact to="/skittles">
				Skittles
			</NavLink>
		</nav>
	);
};

export default Navbar;
