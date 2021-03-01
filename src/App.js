import React from 'react';
import VendingMachine from './VendingMachine';
import Cookies from './Cookies';
import Skittles from './Skittles';
import Reeses from './Reeses';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Route exact path="/">
				<VendingMachine />
			</Route>
			<Route exact path="/cookies">
				<Cookies />
			</Route>
			<Route exact path="/reeses">
				<Reeses />
			</Route>
			<Route exact path="/skittles">
				<Skittles />
			</Route>
		</BrowserRouter>
	);
}

export default App;
