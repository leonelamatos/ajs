import LoginInput from '../components/LoginInput';
import logo from '../assets/img/company-logo.png';

import Image from 'next/image';

const Login = () => {
	return (
		<div className='login'>
			<Image src={logo} alt='company logo' />
			<div className='content'>
				<h1>Active Job Status Login</h1>
				<LoginInput />
			</div>
			<div id='backimage'>
				<div id='image-overlay'></div>
			</div>
		</div>
	);
};

export default Login;
