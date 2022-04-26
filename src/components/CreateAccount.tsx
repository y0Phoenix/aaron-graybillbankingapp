import React, { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { connect, ConnectedProps } from 'react-redux';
import { setAlert } from '../actions/alert';
import { addAccount } from '../actions/account';
import { State } from '../interfaces/state';

const mapStateToProps = (state: State) => ({
    users: state.account
})

const connector = connect(mapStateToProps, {setAlert, addAccount});
type Props = ConnectedProps<typeof connector>;

const CreateAccount: FC<Props> = ({users, setAlert, addAccount}) => {
    const submit = useRef<HTMLButtonElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const {name, email, password} = formData;

    useEffect(() => {
        if (submit.current == null) return; 
        if (name !== '' || email !== '' || password !== '') submit.current.disabled = false;
        else submit.current.disabled = true;
    }, [formData]);

    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, [e.target.name]: e.target.value});

    const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return setAlert({
            title: 'Email Required',
            text: 'Account Email Is Required In Order To Register',
            type: 'danger'
        })
        const i = users.map(user => user.email).indexOf(email);
        if (i > -1) return setAlert({
            title: 'User Already Exists',
            text: `User With The Email ${email} Already Exists In The System Add A Different User`,
            type: 'danger'
        });
        if (password.length < 8) return setAlert({
            title: 'Password Lenght Invalid',
            text: 'Your Password Must Be Greater Than Or Equal To 8',
            type: 'danger'
        });
        addAccount(formData);
        setAlert({
            title: 'Account Created',
            text: 'Account Created Successfully You May Now Deposit Some Cash',
            type: 'success'
        });
        setFormData({name: '', email: '', password: ''});
        if (!submit.current) return;
        submit.current.innerHTML = 'Add Another<br>Account';
    }

    return (
        <div className='createaccount-main'>
            <div>
                <h1>Create Account</h1>
            </div>
            <div className='card' style={{width: "18rem"}}>
                <div className='card-body center'>
                    <form autoComplete='off' onSubmit={(e) => onsubmit(e)}>
                        <input onChange={(e) => onchange(e)} value={name} name='name' type={'text'} className="card-title" placeholder='Name'></input>
                        <input onChange={(e) => onchange(e)} value={email} name='email' type={'email'} className="card-title" placeholder='Email'></input>
                        <input onChange={(e) => onchange(e)} value={password} name='password' type={'password'} className="card-title" placeholder='Password'></input>
                        <motion.button ref={submit} disabled whileHover={{scale: 1.07}} type={'submit'} className="btn btn-dark">
                            Create
                            <br></br> 
                            Account
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default connector(CreateAccount);