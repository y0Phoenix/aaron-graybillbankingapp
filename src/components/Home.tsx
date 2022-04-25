import React from 'react';
import { motion } from 'framer-motion';
import bank from '../images/BIZ-bank28-inside.webp';
import { Link } from 'react-router-dom';

const initial = {
	opacity: 0
};
const animate = {
	opacity: 1
};

const Home = () => {
	return (
		<div className='home-container'>
			<div className="card" style={{width: '45rem', textAlign: 'center'}}>
				<motion.img initial={initial} animate={animate} transition={{duration: 1}} src={bank} className='card-img-top'></motion.img>
				<div className="card-body">
					<motion.h1 initial={initial} animate={animate} transition={{duration: 2}} className="card-title">Welcome To Bad Bank</motion.h1>
					<motion.p initial={initial} animate={animate} transition={{duration: 2.5}} className="card-text">For All Your Banking Needs</motion.p>
					<motion.div initial={initial} animate={animate} transition={{duration: 3}}>
						<motion.div whileHover={{scale: 1.07}}>
							<Link to="/createaccount" className="btn btn-primary">
								Open An Account Here
							</Link>
						</motion.div>
					</motion.div>
				</div>
		</div>
		</div>
	)
}

export default Home