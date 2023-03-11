import React, { useState } from "react";

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPass] = useState(false);

  const handleChange = ({ target }) => {
    onChange({ name: [target.name], value: target.value });
  };

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : " is-valid");
  };

  const toggleShowPass = () => {
    setShowPass((prevState) => !prevState);
  };

  return (
    <div className="mb-4">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <div className="input-group has-validation">
        <input
          className={getInputClasses()}
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
        {type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleShowPass}
          >
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default TextField;
