import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'



function TextInputGroup(props) {
    const {
        label,
        type,
        placeholder,
        name,
        value,
        onChange,
        error,


    } = props;

    return (
        <div>
            <div className="form-group">
                <label htmlFor="name">{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={classnames('form-control form-control-lg',
                        { 'is-invalid': error })}


                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}
TextInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
}


export default TextInputGroup;