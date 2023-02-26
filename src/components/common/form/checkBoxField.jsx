import React from 'react';

const CheckBoxField = ({name, value, onChange, children, error}) => {

    const handleChange = () => {
        onChange({name:name, value:!value})
    }
    const getInputClasses = () => {
        return "form-check-input"+(error?" is-invalid":" is-valid")
    }
    return ( 
        <div className='container mb-4'>
        <div className="form-check">
            <input className={getInputClasses()} 
                    type="checkbox" 
                    value="" 
                    id={name}
                    onChange={handleChange}
                    checked={value}
                    />
            <label className="form-check-label" htmlFor={name}>
              {children}
            </label>
            {error&& <div className="invalid-feedback">{error}</div> }
        </div>
        </div>
     )
}
 
export default CheckBoxField;