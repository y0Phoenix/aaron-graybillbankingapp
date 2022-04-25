import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { connect, ConnectedProps } from 'react-redux';
import { setAlert } from '../actions/alert';

const connector = connect(null, {setAlert});
type Props = ConnectedProps<typeof connector>;

const CreateAccount: FC<Props> = ({setAlert}) => {
    return (
        <div className='createaccount-main'>
            <div>
                <h1>Create Account</h1>
            </div>
            <div className='card' style={{width: "18rem"}}>
                <div className='card-body center'>
                    <input type={'text'} className="card-title" placeholder='Name'></input>
                    <input type={'text'} className="card-title" placeholder='Email'></input>
                    <input type={'text'} className="card-title" placeholder='Password'></input>
                    <motion.input onClick={() => setAlert({title: 'Created Account', text: 'Successfully Created Bank Account You May Now Deposit Some Cash', show: true, type: 'success'})} whileHover={{scale: 1.07}} type={'button'} className="btn btn-dark" value={'Create\nAccount'}></motion.input>
                </div>
            </div>
        </div>
    )
}


export default connector(CreateAccount);