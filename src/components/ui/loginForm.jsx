import React, {useEffect, useState} from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';
import CheckBoxField from '../common/form/checkBoxField';
import * as yup from 'yup';

const LoginForm = () => {
    const [data, setData] = useState({email:"", password: "", stayOn:false});
    const [errors, setErrors] = useState({});

    // const handleChange = ({target}) => {
    //     setData((prevState) => ({...prevState, [target.name]: target.value}) )
    //     // console.log(e.target.name)
    // }

    const handleChange = (target) => {
        setData((prevState) => ({...prevState, [target.name]: target.value}) )
        // console.log(e.target.name)
    }

    validateScheme = yup.object().shape({
        email:yup.string().required("Email обязательно для заполнения").email("Введен некорректно"),
        password:yup.string().required("Обязательно заполнитьт").matches()
    })


    const validatorConfig = {
        email:{
            isRequired: {
                message: "Email обязательно для заполнения", 
            },
            isEmail : {
                message: "Email введен некорректно",
            },
        },
        password:{
            isRequired: {
                message: "Password обязательно для заполнения",
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать заглавный символ"
            },
            isNumber: {
                message: "Пароль должен содержать цифру"
            },
            min: {
                message: "Минимальная длина пароля 8 символов",
                value: 8,
            },
        },
    }

    useEffect(() => {
        validate();
    }, [data]);



    const validate = () => {
        const errors =  validator(data, validatorConfig)
       
        // for (const fieldName in data) {
        //     if(data[fieldName].trim()==="") {
        //         errors[fieldName] = `${fieldName} обязательно для заполнения`
        //     }
        // }
        setErrors(errors)
        return Object.keys(errors).length === 0;
    }

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        console.log(data)
        e.preventDefault()
    }

    return (
    <form onSubmit={handleSubmit}>
            <TextField 
                label="Your Email" 
                type = "text" 
                name = "email" 
                id="email" 
                value={data.email} 
                onChange = {handleChange}
                error={errors.email}
                />
            <TextField 
                label="Password" 
                type = "password" 
                name = "password" 
                id="password" 
                value={data.password} 
                onChange = {handleChange}
                error={errors.password}
                />
            <CheckBoxField 
                        value={data.stayOn}
                        onChange={handleChange}
                        name = "stayOn"
                        > 
                        <a href='#'>Оставаться в системе</a>
            </CheckBoxField>
            <button type='submit'
                     className='btn btn-primary sm p-1 col-md-3 offset-md-3'
                     disabled = {!isValid}
                     >Отправить</button>
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
    </form>
    )
}
 
export default LoginForm;