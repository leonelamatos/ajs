import LoginInput from '../components/LoginInput';
import logo from '../assets/img/company-logo.png';

import Image from 'next/image';

const Login = () => {
	return (
		<div id='login' className='login'>
			<img src='company-logo.png' alt='company logo' className='image' />
			<div className='content'>
				<h1>Active Job Status Login</h1>
				<LoginInput />
			</div>
			<div id='backimage' />
		</div>
	);
};

export default Login;
