import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/';
import Home from './pages/Home/';
import Meeting from './pages/Meeting';
import AuthProvider from './auth/AuthProvider';

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route
						path='/'
						element={<Login />}
					/>
					<Route
						path='/home'
						element={<Home />}
					/>
					<Route
						path='/meeting/:id'
						element={<Meeting />}
					/>
				</Routes>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
