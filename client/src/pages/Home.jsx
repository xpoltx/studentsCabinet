import React from 'react'
import HeaderBar from '../components/HeaderBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <HeaderBar/>
            <div className='relative inset-y-0 left-0 w-2/4 mt-16 ml-10'>
                <p className='text-black dark:text-sky-400 text-7xl font-bold mb-8'>
                    Ласкаво просимо до Студентського кабінету!
                </p>
                <p className='text-black dark:text-red-300 text-xl font-medium'>
                    Студентський кабінет - особистий простір для управління навчанням. Залишайтесь організованими та в курсі всіх важливих подій.
                </p>
                <div className='flex mt-8 space-x-4'>
                    <Link to={"/about"} className='box-border border-3 border-black px-6 py-3 w-40 bg-black text-white dark:bg-white dark:text-black cursor-pointer hover:border-purple-300 duration-300 ease-in text-center'>Дізнатися</Link>
                    <Link to={"/register"} className='box-border border-3 border-black px-6 py-3 w-40 bg-white text-black dark:bg-black dark:text-white cursor-pointer hover:border-purple-300 duration-300 ease-in text-center'>Приєднатися</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home