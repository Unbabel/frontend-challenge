import * as React from 'react'

const Content = ({ value, inputType, onChange, onBlur, placeholder }) => {
    return (inputType === "single" ? < input value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoFocus={true}
        placeholder={placeholder}
    />
        :
        <textarea value={value}
            onChange={onChange}
            onBlur={onBlur}
            autoFocus={true}
            placeholder={placeholder}
        />
    )
}
export default Content;