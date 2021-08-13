import React from 'react';

const Header = () => {
	return (
		<header id='header' className='header'>
			<div id='logo' className='logo'>
				<img src='../company-logo.png' alt='' />
			</div>

			<div id='avatar-logout'>
				<img src='../avatar.png' alt='' />
				<span>Logout</span>
			</div>
		</header>
	);
};

export default Header;
