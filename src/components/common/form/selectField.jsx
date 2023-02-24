import React from 'react';

const SelectField = ({
    label, 
    value, 
    onChange, 
    defaulOption, 
    options, 
    error
}) => {

    const handleChange = ({target}) => {
        onChange({name:[target.name], value:target.value})
    }
    const getInputClasses = () => {
        return "form-select"+(error?" is-invalid":" is-valid")
    }


    const optionsArray = !Array.isArray(options) && typeof options === "object"
        ?
     Object.keys(options).map((optionName)=> ({name:options[optionName].name, value:options[optionName]._id, key:options[optionName]._id}))
        :
     options;
    
    return  <div className="mb-4">
            <label htmlFor="validationServer04" className="form-label">
                {label}
            </label>
                <select 
                    className={getInputClasses()} 
                    id="validationServer04" 
                    name='profession'
                    value={value}
                    onChange={handleChange}
                    >
                        <option disabled value="">
                            {defaulOption}
                        </option>
                        {
                            optionsArray && optionsArray.map((option)=> (
                                <option  
                                value={option.value}
                                key={option.value}>
                                {option.name}
                                </option>))
                        }
                </select>
   {error && <div id="validationServer04Feedback" className="invalid-feedback">
    {error}
    </div>}
</div>
}
 
export default SelectField;