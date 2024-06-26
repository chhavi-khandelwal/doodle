import { useState } from 'react';
import {
	MainContainer,
	TitleContainer,
	InputContainer,
	Label,
	SubmitButton,
	Error,
	Input,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';

const Login = () => {
	const { user, loginAction } = useAuth();
	const navigate = useNavigate();

	if (user) {
		navigate('/home');
	}
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		loginAction({ email, password });
	};

	return (
		<MainContainer role='region'>
			<TitleContainer>DOODLE</TitleContainer>
			<form onSubmit={submitHandler}>
				<InputContainer>
					<Label htmlFor='email'>Email</Label>
					<Input
						required
						id='email'
						type='email'
						value={email}
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
						aria-invalid={emailError ? 'true' : 'false'}
						aria-describedby='email-error'
					/>
					<Error id='email-error'>{emailError}</Error>
				</InputContainer>

				<InputContainer>
					<Label htmlFor='password'>Password</Label>
					<Input
						required
						id='password'
						type='password'
						value={password}
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
						aria-invalid={passwordError ? 'true' : 'false'}
						aria-describedby='password-error'
					/>
					<Error id='password-error'>{passwordError}</Error>
				</InputContainer>

				<SubmitButton type='submit'>Login</SubmitButton>
			</form>
		</MainContainer>
	);
};

export default Login;
