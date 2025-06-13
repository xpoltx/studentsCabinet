import React from 'react'
import { Link } from 'react-router-dom'

const HowTo = () => {
  return (
    <div className='relative ml-10 mb-50 w-full lg:w-3/4 xl:w-2/3 mx-auto'>
      <div className='mb-14'>
        <p className='text-black text-base sm:text-lg font-normal mb-2'>Ефективність</p>
        <p className='text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>Як використовувати Студентський кабінет</p>
      </div>
      <div>
        <p className='text-black text-base sm:text-lg md:text-xl font-medium pb-6 md:pb-10'>Інформація про використання демо варіанту застосунку</p>
        <Link to={'/howto'} className='inline-block box-border border-2 border-black px-8 py-3 bg-black text-white 
                        dark:bg-white dark:text-black cursor-pointer hover:border-violet-300 duration-100 ease-out text-center'>Дізнатися</Link>
      </div>
    </div>
  )
}

export default HowTo