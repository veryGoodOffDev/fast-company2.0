import React from 'react';


const Login = () => {
    return (
    <form>
        <div className='d-flex flex-row m-5 justify-content-center'>
        <div className='mb-3 m-1 col'>
            <label className='form-label' htmlFor='email'>Email</label>
        <input className='form-control' type="text" id='email'/>
        </div>
        <div className='mb-3 m-1 col'>
            <label className='form-label' htmlFor='password'>Password</label>
            <input className='form-control' type="password" id='password'/>
        </div>
        </div>
    </form>
    )
}
 
export default Login;