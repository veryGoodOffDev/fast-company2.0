import React, { useEffect, useState } from 'react';
import TextField from '../components/textField';


const Login = () => {
    const [data, setData] = useState({email:"", password: ""});
    const [, setErrors] = useState();

    const handleChange = ({target}) => {
        setData((prevState) => ({...prevState, [target.name]: target.value}) )
        // console.log(e.target.name)
    }

    useEffect(() => {
        validate();
    }, [data])

    const validate = () => {
        const errors = {}
        for (const fieldName in data) {
            if(data[fieldName].trim()==="") {
                errors[fieldName] = `${fieldName} обязательно для заполнения`
            }
        }
        setErrors(errors)
    }

    const handleSubmit = (e) => {
        console.log(data)
        e.preventDefault()
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className='d-flex flex-row m-5 justify-content-center'>
            <TextField label="Your Email" type = "text" name = "email" id="email" value={data.email} onChange = {handleChange}/>
            <TextField label="Password" type = "password" name = "password" id="password" value={data.password} onChange = {handleChange}/>
            <button type='submit' className='btn btn-primary sm p-1'>Отправить</button>
        {/* <div className='mb-3 m-1'>
            <label className='form-label' 
                htmlFor='email'>Email</label>
                <input className='form-control' 
                    type="text" 
                    id='email' 
                    value={data.email} 
                    name = "email"
                    onChange = {handleChange} 
                    />
        </div> */}
        {/* <div className='mb-3 m-1'>
            <label className='form-label' htmlFor='password'>Password</label>
            <input className='form-control' type="password" id='password' name = "password" value={data.password} onChange={handleChange}/>
        </div> */}
        </div>
    </form>
    )
}
 
export default Login;