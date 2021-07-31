import Image from 'next/image';
import OpenEyeIcon from '../assets/img/eye_opened.svg';

const LoginInput = () => {
	return (
		<form id='form'>
			<label htmlFor='username'>
				<span>Username</span>
				<input
					id='username'
					type='text'
					placeholder='your empire username'
				/>
			</label>
			<label htmlFor='password'>
				<span>Password</span>
				<span className='input-container'>
					<input
						id='password'
						type='password'
						placeholder='your empire password'
					/>
					<span className='show-pswd'>
						{/* <Image src={OpenEyeIcon} height={15} width={15} /> */}
						<OpenEyeIcon />
					</span>
				</span>
			</label>

			<button className='btn'>Login</button>
			<label htmlFor='checkbox' className='checkbox'>
				<input type='checkbox' name='rememberMe' id='checkbox' />
				<span>Remember Me</span>
			</label>
		</form>
	);
};

export default LoginInput;
