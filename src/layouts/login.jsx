import React, { useState } from 'react';


const Login = () => {
    const [data, setData] = useState({email:"", password: ""});
    const handleChange = ({target}) => {
        setData((prevState) => ({...prevState, [target.name]: target.value}) )
        // console.log(e.target.name)
    }
    return (
    <form>
        <div className='d-flex flex-row m-5 justify-content-center'>
        <div className='mb-3 m-1'>
            <label className='form-label' htmlFor='email'>Email</label>
        <input className='form-control' type="text" id='email' value={data.email} onChange = {handleChange} name = "email"/>
        </div>
        <div className='mb-3 m-1'>
            <label className='form-label' htmlFor='password'>Password</label>
            <input className='form-control' type="password" id='password' name = "password" value={data.password} onChange={handleChange}/>
        </div>
        </div>
    </form>
    )
}
 
export default Login;