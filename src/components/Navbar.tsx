import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Desc {
	type: string,
	text: string
}

const Navbar = () => {
	const [show, setShow] = useState({
		home: false,
		createAccount: false,
		withdraw: false,
		deposit: false,
		allData: false
	});
	const [checkShow, setCheckShow] = useState('');

	useEffect(() => {
		if (checkShow == '') return;
		const bool = show[checkShow as keyof typeof show];
		if (bool) setShow({...show, [checkShow]: false});
		setCheckShow('');
	}, [checkShow]);

	const toggleDesc = (type: string) => {
		setTimeout(() => setCheckShow(type), 3000);
		setShow({...show, [type]: !show[type as keyof typeof show]});
	}

	const Description = ({type, text}: Desc) => 
		<>
			{show[type as keyof typeof show] &&
				<div className={`description ${type === 'deposit' || type === 'withdraw' ? 'dropdown-desc' : ''}`}>
					{text}
				</div>
			}
		</>

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<div className='nav-item-container'>
					<Link onMouseOver={() => toggleDesc('home')} onMouseLeave={() => toggleDesc('home')} className="navbar-brand" to='/'>Bad Bank</Link>
					<Description type={'home'} text={'Home Page'}/>
				</div>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<div className='nav-item-container'>
							<Link className="nav-link" to='/createaccount' onMouseOver={() => toggleDesc('createAccount')} onMouseLeave={() => toggleDesc('createAccount')}>Create Account</Link>
							<Description type='createAccount' text='Create A Bank Account To Get Started'/>
						</div>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Actions
						</a>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li>
							<div className='nav-item-container'>
								<Link className="dropdown-item" to='/deposit' onMouseOver={() => toggleDesc('deposit')} onMouseLeave={() => toggleDesc('deposit')}>Deposit</Link>
								<Description type='deposit' text='Deposit Money Into Your Account'/>
							</div>
						</li>
						<li><hr className="dropdown-divider"></hr></li>
						<li>
							<div className='nav-item-container'>
								<Link className="dropdown-item" to='/withdraw' onMouseOver={() => toggleDesc('withdraw')} onMouseLeave={() => toggleDesc('withdraw')}>Withdraw</Link>
								<Description type='withdraw' text='Withdraw Money From Your Account'/>
							</div>
						</li>
						</ul>
					</li>
					<li className="nav-item">
						<div className='nav-item-container'>
							<Link className="nav-link" to='/alldata' onMouseOver={() => toggleDesc('allData')} onMouseLeave={() => toggleDesc('allData')}>All Data</Link>
							<Description type='allData' text='View All Account Data' />
						</div>
					</li>
					</ul>
				</div>
			</div>
		</nav >
	)
}

export default Navbar;