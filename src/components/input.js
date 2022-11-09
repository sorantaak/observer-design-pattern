import PropTypes from 'prop-types'
import { useState } from 'react';


function Input({ name , placeholder , children }) {
    const [value , setValue] = useState("");

    let changeHandler = (e) => setValue(e.target.value);

    return (
        <>
            <label>Name :</label>
            <input
                placeholder="please enter name"
                value={value}
                onChange={changeHandler}
            />
            {children && children({ value })}
        </>
    )
}

Input.propTypes = {
    name : PropTypes.string.isRequired,
    render : PropTypes.func
}


export default Input;