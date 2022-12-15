import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout/Layout';
import Account from './pages/Account/Account';
import Chat from './pages/Chat/Chat';
import Event from './pages/Event/Event/Event';
import Events from './pages/Event/Events';
import NewEvent from './pages/Event/NewEvent/NewEvent';
import PaymentDone from './pages/Payment/PaymentDone/PaymentDone';
import Registration from './pages/Registration/Registration';
Routes;

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Registration />} />
					<Route path='/events' element={<Events />} />
					<Route path='/events/:id' element={<Event />} />
					<Route path='/events/new' element={<NewEvent />} />
					<Route path='/chat' element={<Chat />} />
					<Route
						path='/payment/done'
						element={<PaymentDone />}
					/>
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
