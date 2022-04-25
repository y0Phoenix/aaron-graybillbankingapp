import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Home from './components/Home'
import AllData from './components/AllData'
import CreateAccount from './components/CreateAccount'
import Deposit from './components/Deposit'
import Withdraw from './components/Withdraw'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<>
					<Navbar />
					<Alert />
					<Routes>
						<Route path='/' element={<Home />}/>
						<Route path='/alldata' element={<AllData />}/>
						<Route path='/createaccount' element={<CreateAccount />}/>
						<Route path='/deposit' element={<Deposit />}/>
						<Route path='/withdraw' element={<Withdraw />}/>
					</Routes>
				</>
			</Router>
		</Provider>
	);
}

export default App
