import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HeaderBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Головна сторінка' },
        { to: '/about', label: 'Про нас' },
        { to: '/contacts', label: 'Контакти' }
    ];

    return (
        <div className='sticky inset-x-0 top-0 w-full bg-cyan-200/30 backdrop-blur-[2px] z-2 shadow-md'>
            <div className='mx-auto px-4 py-3 flex justify-between items-center'>
                <div className='flex space-x-4 items-center'>
                    <Link to={'/'}><img src="/logo.svg" alt="logo" className='w-14 cursor-pointer mr-6 ml-6' /></Link>
                    <nav className='hidden md:flex space-x-6'>
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className='font-medium cursor-pointer hover:text-purple-300 duration-150 ease-in'>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className='hidden md:flex space-x-4 mr-10'>
                    <Link to={"/register"} className='box-border border-2 border-black px-6 py-2 bg-black text-white 
                    dark:bg-white dark:text-black cursor-pointer hover:border-purple-300 duration-300 ease-in'>Реєстарція</Link>
                    <Link to={"/login"} className='box-border border-2 border-black px-6 py-2 bg-white text-black 
                    dark:bg-black dark:text-white cursor-pointer hover:border-purple-300 duration-300 ease-in'>Вхід</Link>
                </div>

                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-black text-6xl focus:outline-none'>
                        =
                    </button>
                </div>
            </div>
            <nav className={`md:hidden absolute w-full justify-center items-center ${isOpen ? 'block' : 'hidden'} px-4 pt-2 pb-4 space-y-2 bg-cyan-100/80
            backdrop-blur-[2px]`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className='block text-black font-medium hover:text-purple-300 duration-150 ease-in py-2'
                            onClick={() => setIsOpen(false)}>
                            {link.label}
                        </Link>
                    ))}
                    <div className='pt-4 border-t border-gray-300 flex flex-col space-y-3'>
                        <Link to={"/register"} className='box-border border-2 border-black px-6 py-2 bg-black text-white 
                        dark:bg-white dark:text-black cursor-pointer hover:border-purple-300 duration-300 ease-in'
                        onClick={()=> setIsOpen(false)}
                        >Реєстарція</Link>
                        <Link to={"/login"} className='box-border border-2 border-black px-6 py-2 bg-white text-black 
                        dark:bg-black dark:text-white cursor-pointer hover:border-purple-300 duration-300 ease-in'
                        onClick={()=> setIsOpen(false)}
                        >Вхід</Link>

                    </div>
                </nav>
        </div>
    )
}

export default HeaderBar