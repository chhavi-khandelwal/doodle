import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialContext = {
	token: '',
	user: null,
	loginAction: async (data: any) => {},
	logout: () => {},
};

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(localStorage.getItem('site') || '');
	const navigate = useNavigate();
	const loginAction = async (data) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/auth/login`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			);
			const res = await response.json();
			if (res.token) {
				setUser(res.user);
				setToken(res.token);
				localStorage.setItem('doodle', res.token);
				navigate('/home');
				return;
			} else {
				throw new Error(res.message);
			}
		} catch (err) {
			throw new Error(err);
		}
	};

	const logout = () => {
		setUser(null);
		setToken('');
		localStorage.removeItem('site');
		navigate('/home');
	};
	return (
		<AuthContext.Provider value={{ token, user, loginAction, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => {
	return useContext(AuthContext);
};
