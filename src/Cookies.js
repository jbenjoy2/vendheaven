import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './Greeting';
import './Cookies.css';
const Cookies = () => {
	return (
		<div
			className="Cookies"
			style={{
				backgroundImage : `url('https://smhttp-ssl-60529-live.nexcesscdn.net/pub/media/catalog/product/cache/27e90512d3c51f9fa74925285537287d/f/a/famous-amos-cookies-individual-pack.jpg')`
			}}
		>
			<Greeting>
				<h1>HOLY CHOCOLATEY CRUNCH BATMAN!</h1>
			</Greeting>
			<Greeting>
				<div className="Machine-greeting">
					<h2 className="Cookies-machine">
						<Link to="/">Back to VendHeaven</Link>
					</h2>
				</div>
			</Greeting>
		</div>
	);
};

export default Cookies;
