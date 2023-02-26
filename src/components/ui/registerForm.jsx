import React from 'react';
import { useState, useEffect } from 'react';
import { validator } from '../../utils/validator';
import TextField from '../common/form/textField';
import api from "../../api"
import SelectField from '../common/form/selectField';
import RadioField from '../common/form/radioField';
import MultiSelectField from '../common/form/multiSelectField';
import CheckBoxField from '../common/form/checkBoxField';



const RegisterForm = () => {
    const [data, setData] = useState({
        email:"", 
        password: "", 
        profession:"", 
        sex:"male",
        qualities:[],
        license: false,
    
    });
    const [qualities, setQualities] = useState({})

    const [errors, setErrors] = useState({});
    const [professions, setProfession] = useState([]);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({...prevState, [target.name]: target.value}) )
        // console.log(e.target.name)
    }

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
        profession: {
            isRequired: {
                message: "Обязательно нужно выбрать"
            }
        },
        license: {
            isRequired: {
                message: "Соглашение не принято"
            }
        }
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
            <SelectField
                label="Выберите вашу профессию"
                defaulOption="Choose..."
                options={professions}
                onChange = {handleChange}
                value = {data.profession}
                error={errors.profession}
                />
            <RadioField options={[
                        {name:"Male", value: "male"},
                        {name:"Female", value: "female"}
                        ]}
                        value = {data.sex}
                        name = "sex"
                        onChange={handleChange}
                        />  
            <MultiSelectField 
                        options={qualities} 
                        onChange={handleChange} 
                        name="qualities"
                        label="Выберите ваши качества"
                        />   
            <CheckBoxField 
                        value={data.license}
                        onChange={handleChange}
                        name = "license"
                        error = {errors.license}
                        > 
                        <a href='#'>Подтвердить согласие</a>
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
 
export default RegisterForm;