import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CreateAccount = () => {
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
                    <motion.input whileHover={{scale: 1.07}} type={'button'} className="btn btn-dark" value={'Create\nAccount'}></motion.input>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount