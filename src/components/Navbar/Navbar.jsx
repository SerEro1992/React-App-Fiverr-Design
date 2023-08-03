import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	const [active, setActive] = useState(false);

	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false);
	};
	useEffect(() => {
		window.addEventListener('scroll', isActive);

		return () => {
			window.removeEventListener('scroll', isActive);
		};
	}, []);

	return (
		<div className={active ? 'navbar active' : 'navbar'}>
			<div className="container">
				<div className="logo">
					{/* <Link to='/'> */}
					<span className="text">fiverr</span>
					{/* </Link> */}

					<span className="dot">.</span>
				</div>
				<div className="links">
					<span>Fiverr Business</span>
					<span>Explore</span>
					<span>English</span>
					<span>Sing in</span>
					<span>Become a Seller</span>
					<button>Join</button>
				</div>
			</div>

			{active && (
				<>
					<hr />
					<div className="menu">
						<span>Test</span>
						<span>Test</span>
					</div>
				</>
			)}
		</div>
	);
};

export default Navbar;
