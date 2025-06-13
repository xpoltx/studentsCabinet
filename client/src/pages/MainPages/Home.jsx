import React from 'react'
import { Link } from 'react-router-dom'
import HeaderBar from '../../components/Main/HeaderBar'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderBar />
            <div className="flex-grow flex justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className='w-full max-w-4xl text-center md:text-left'>
                    <p className='text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6'>
                        Ласкаво просимо до Студентського кабінету!
                    </p>
                    <p className='text-black text-base sm:text-lg font-medium mb-6 sm:mb-8'>
                        Студентський кабінет - особистий простір для управління навчанням. Залишайтесь організованими та в курсі всіх важливих подій.
                    </p>
                    <div className='flex flex-col sm:flex-row justify-center md:justify-start mt-6 sm:mt-8 space-y-4 sm:space-y-0 sm:space-x-4'>
                        <Link to={"/about"} className='box-border border-3 border-black px-6 py-3 w-full sm:w-40 bg-black text-white 
                        dark:bg-white dark:text-black cursor-pointer 
                        hover:border-purple-300 duration-300 ease-in text-center'>Дізнатися</Link>
                        <Link to={"/register"} className='box-border border-3 border-black px-6 py-3 w-full sm:w-40 bg-white text-black 
                        dark:bg-black dark:text-white cursor-pointer 
                        hover:border-purple-300 duration-300 ease-in text-center'>Приєднатися</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

