import React from 'react'

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
                    <input type={'button'} className="btn btn-primary" value={'Create\nAccount'}></input>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount