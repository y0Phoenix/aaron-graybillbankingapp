import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { State } from '../interfaces/state';
import { withdraw } from '../actions/balance';
import { setAlert } from '../actions/alert';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = (state: State) => ({
	balance: state.balance
});

const connector = connect(mapStateToProps, {withdraw, setAlert});

type Props = ConnectedProps<typeof connector>;

const Withdraw: React.FC<Props> = ({balance, withdraw, setAlert}) => {
	const submit = useRef<HTMLButtonElement>(null);

	const [amount, setAmount] = useState('');

	useEffect(() => {
		if (!submit.current) return;
		if (amount === '') submit.current.disabled = true;
		else submit.current.disabled = false;
	}, [amount]);

	const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isNaN(parseFloat(amount))) return setAlert({
			title: 'Invalid Withdraw',
			text: 'Only Enter Numbers In The Input Field',
			type: 'danger'
		});
		if (parseFloat(amount) <= 0) return setAlert({
			title: 'Invalid Amount',
			text: 'Withdraw Amount Must Be Greater Than 0',
			type: 'danger'
		});
		if (parseFloat(amount) > parseFloat(balance)) return setAlert({
			title: 'Invalid Withdraw',
			text: 'The Withdraw Amount Is Greater Than Your Balance',
			type: 'danger'
		});
		withdraw(amount);
		setAlert({
			title: 'Successfully Withdrawn',
			text: 'Withdraw Successfull The Money Has Been Taken Out Of Your Account',
			type: 'success'
		})
	}
	return (
		<div className='actions-container'>
			<h1>Withdraw</h1>
			<div className='card' style={{width: "18rem"}}>
				<div className='card-body center'>
					<form autoComplete='off' onSubmit={(e) => onsubmit(e)}>
						<div className='actions-text'>Balance {balance}</div>
						<br></br>
						<br></br>
						<div className='actions-text'>Withdraw Amount</div>
						<input onChange={(e) => setAmount(e.target.value)} value={amount} name='amount' type={'text'} className="card-title" placeholder='0.00'></input>
						<motion.button ref={submit} disabled whileHover={{scale: 1.07}} type={'submit'} className="btn btn-dark">
							Withdraw
						</motion.button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default connector(Withdraw);