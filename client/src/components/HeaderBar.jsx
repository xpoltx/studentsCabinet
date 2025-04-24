import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBar = () => {
    return (
        <div className='sticky inset-x-0 top-0 px-4 py-3 flex justify-between items-center backdrop-blur-[2px] z-2'>
            <div className='flex space-x-4 items-center'>
                <Link to={'/'}><img src="../../public/logo.svg" alt="logo" className='border-box flex w-14 cursor-pointer mr-10 ml-6' /></Link>
                <p className='font-medium cursor-pointer hover:text-purple-300 duration-150 ease-in'><Link to='/'>Головна сторінка</Link></p>
                <p className='font-medium cursor-pointer hover:text-purple-300 duration-150 ease-in'><Link to='/about'>Про нас</Link></p>
                <p className='font-medium cursor-pointer hover:text-purple-300 duration-150 ease-in'><Link to='/contacts'>Контакти</Link></p>
            </div>
            <div className='flex space-x-4 mr-10'>
                <Link to={"/register"} className='box-border border-2 border-black px-6 py-1 bg-black text-white dark:bg-white dark:text-black cursor-pointer hover:border-purple-300 duration-300 ease-in'>Registration</Link>
                <Link to={"/login"} className='box-border border-2 border-black px-6 py-1 bg-white text-black dark:bg-black dark:text-white cursor-pointer hover:border-purple-300 duration-300 ease-in'>Login</Link>
            </div>
        </div>
    )
}

export default HeaderBar