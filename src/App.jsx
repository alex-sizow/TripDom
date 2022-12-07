import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Account from './pages/Account/Account';
import Meet from './pages/Meet/Meet';
import Registration from './pages/Registration/Registration';
Routes;

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Registration />} />
					<Route
						path='/registration'
						element={<Registration />}
					/>
					<Route path='/account' element={<Account />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
