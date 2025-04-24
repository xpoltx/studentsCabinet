import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({ role }) => {
    return (
        <div>
            <div className='flex flex-col items-start space-y-4 mt-35 overflow-x-hidden'>
                <Link to={'/'} className='text-xl text-white cursor-pointer hover:text-purple-300 duration-150 ease-in w-full mb-0 w-full'>Головна </Link>
                <hr className='border-t border-white w-full my-2' />
                <Link to={'/main-info'} className='text-xl text-white cursor-pointer hover:text-purple-300 duration-150 ease-in mb-0 mt-5 w-full'>Загальна інформація</Link>
                <hr className='border-t border-white w-full my-2' />
                {role === 'student' && (
                    <>
                        <Link to={'/record-book'} className='text-xl text-white cursor-pointer hover:text-purple-300 duration-150 ease-in mb-0 mt-5 w-full'>Залікова</Link>
                        <hr className='border-t border-white w-full my-2' />
                        <Link to={'/curriculum'} className='text-xl text-white cursor-pointer hover:text-purple-300 duration-150 ease-in mb-0 mt-5 w-full'>Навчальний план</Link>
                        <hr className='border-t border-white w-full my-2' />
                        <Link to={'/schedule'} className='text-xl text-white cursor-pointer hover:text-purple-300 duration-150 ease-in mb-0 mt-5 w-full'>Розклад</Link>
                        <hr className='border-t border-white w-full my-2' />
                    </>
                )}
                {role === 'professor' && (
                    <>
                        <Link to={'/disciplines'} className='text-xl text-white cursor-pointer hover:text-purple-300 duration-150 ease-in mb-0 mt-5 w-full'>Редагувати дисципліну</Link>
                        <hr className='border-t border-white w-full my-2' />
                        <Link to={'/records'} className='text-xl text-white cursor-pointer hover:text-purple-300 duration-150 ease-in mb-0 mt-5 w-full'>Виставити оцінки</Link>
                        <hr className='border-t border-white w-full my-2' />
                    </>
                )}

            </div>
        </div>
    )
}

export default NavLinks