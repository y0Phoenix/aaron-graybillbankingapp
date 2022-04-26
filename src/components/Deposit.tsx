import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { State } from '../interfaces/state';
import { connect, ConnectedProps } from 'react-redux';
import { deposit } from '../actions/balance';
import { setAlert } from '../actions/alert';

const mapStateToProps = (state: State) => ({
	balance: state.balance
});

const connector = connect(mapStateToProps, {deposit, setAlert});

type Props = ConnectedProps<typeof connector>;

const Deposit: React.FC<Props> = ({balance, deposit, setAlert}) => {
	const submit = useRef<HTMLButtonElement>(null);

	const [amount, setAmount] = useState('');

	useEffect(() => {
		if (!submit.current) return;
		if (amount === '') submit.current.disabled = true;
		else submit.current.disabled = false;
	}, [amount]);

	const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const Amount = amount.replace(/$/g, '');
		if (isNaN(parseFloat(Amount))) return setAlert({
			title: 'Invalid Deposit',
			text: 'Only Enter Numbers In The Input Field',
			type: 'danger'
		});
		if (parseFloat(Amount) <= 0) return setAlert({
			title: 'Invalid Amount',
			text: 'Deposit Amount Must Be Greater Than 0',
			type: 'danger'
		});
		deposit(Amount);
		setAlert({
			title: 'Successfully Deposited',
			text: 'Deposit Successfull The Money Is In Your Account',
			type: 'success'
		})
	}

	return (
		<div className='actions-container'>
			<h1>Deposit</h1>
			<div className='card' style={{width: "18rem"}}>
				<div className='card-body center'>
					<form autoComplete='off' onSubmit={(e) => onsubmit(e)}>
						<div className='actions-text'>{`Balance		${balance}`}</div>
						<br></br>
						<br></br>
						<div className='actions-text'>Deposit Amount</div>
						<input onChange={(e) => setAmount(e.target.value)} value={amount} name='amount' type={'text'} className="card-title" placeholder='0.00'></input>
						<motion.button ref={submit} disabled whileHover={{scale: 1.07}} type={'submit'} className="btn btn-dark">
							Deposit
						</motion.button>
					</form>
				</div>
			</div>
		</div>
	)	
};

export default connector(Deposit);