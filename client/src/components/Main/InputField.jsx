import React from 'react'

const InputField = ({ id, type, placeholder, value, onChange, label }) => {
    return (
        <div>
            <label htmlFor={id} className='block text-left text-sm font-medium text-gray-700 mb-1'>
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                required
                value={value}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 ease-in-out'
                onChange={onChange}
            />
        </div>
    )
}

export default InputField