import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<ul className="nav justify-content-center">
				<li className="nav-item">
					<Link className="nav-link active" to="/">
						All Links
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/create">
						Add Links
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="#">
						none
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
