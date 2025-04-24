import React from 'react'
import { Link } from 'react-router-dom'

const HowTo = () => {
  return (
    <div className='relative ml-10 mb-50 w-1/2'>
      <div className='mb-15'>
        <p className='dark:text-sky-400 text-xl font-normal'>Ефективність</p>
        <p className='dark:text-sky-400 text-6xl font-bold'>Як використовувати Студентський кабінет</p>
      </div>
      <div>
        <p className='dark:text-red-300 text-xl font-medium pb-10'>Інформація про використання демо варіанту застосунку</p>
        <Link to={'/howto'} className='box-border border-3 px-6 py-3 w-auto text-white cursor-pointer hover:border-violet-300 duration-100 ease-out'>Дізнатися</Link>
      </div>
    </div>
  )
}

export default HowTo