import React from 'react';

const Sidebard = () => {
	return (
		<aside className='aside'>
			<div className='aside-container'>
				<img
					id='dashboard'
					src='../dashboard_icon.png'
					alt='white dashboard icon'
				/>
				<img src='../task_icon_white.png' alt='white task icon' />
			</div>
		</aside>
	);
};

export default Sidebard;
