import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ path, label, onClick }) => {
    return (
        <div className='w-full'>
            <Link to={path} className='text-xl text-white cursor-pointer hover:text-purple-300 duration-150 ease-in mb-0 w-full'
                onClick={onClick}>
                {label}
            </Link>
            <hr className='border-t border-white w-full my-2' />
        </div>
    )
}

export default NavLink