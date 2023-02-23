import React from 'react';

const RadioField = ({options, name, onChange, value, label}) => {
    return <div className='mb4'>
            <label className="form-label">
                {label}
            </label>
            {options.map((option) => (    
            <div key={option.name +"_"+option.value} className="form-check form-check-inline">
    <input 
            className="form-check-input" 
            type="radio" 
            name={name} 
            id={option.name +"_"+option.value} 
            value={option.value}
            checked={option.value===value}
            onChange={onChange}
            />
    <label className="form-check-label" htmlFor={option.name +"_"+option.value}>
        {option.name}
        </label>
  </div>))
  }

  </div>
}
 
export default RadioField;