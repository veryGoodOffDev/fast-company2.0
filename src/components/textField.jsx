import React from 'react';

const TextField = ({label, type, name, value, onChange}) => {
    return (
    <div className='mb-3 m-1'>
        <label className='form-label' htmlFor={name}>{label}</label>
        <input className='form-control' 
                type={type} 
                id={name} 
                name = {name}
                value={value} 
                onChange = {onChange} 
        />
    </div>
    
)}
 
export default TextField;