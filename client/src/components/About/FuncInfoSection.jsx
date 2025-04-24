import React from 'react'
import block from '../../assets/block.png'
import arrowR from '../../assets/arrowR.png'
import { Link } from 'react-router-dom'

const FuncInfo = () => {
    return (
        <div className='relative ml-10 text-red-600 mb-40'>
            <div className='w-1/2 mb-15'>
                <p className='text-black dark:text-sky-400 text-xl font-normal'>Функції</p>
                <p className='text-black dark:text-sky-400 text-6xl font-bold mb-10'>Всі можливості вашого Студентського кабінету</p>
                <p className='text-black dark:text-red-300 text-xl font-medium'>Наш студентський кабінет пропонує широкий спектр функцій, які спрощують навчальний процес. Від доступу до матеріалів до управління розкладом — все в одному місці.</p>
            </div>
            <div className='flex mb-14'>
                <div>
                    <img src={block} alt="block" className='border-box bg-white w-10 h-auto'/>
                    <p className='text-black dark:text-sky-400 text-3xl font-bold mb-5'>Легкий доступ до навчальних матеріалів</p>
                    <p className='text-black dark:text-red-300 text-sm'>Отримуйте доступ до всіх необхідних ресурсів за кілька кліків.</p>
                </div>
                <div>
                    <img src={block} alt="block" className='border-box bg-white w-10 h-auto'/>
                    <p className='text-black dark:text-sky-400 text-3xl font-bold mb-5'>Управління розкладом та завданнями</p>
                    <p className='text-black dark:text-red-300 text-sm'>Легко плануйте свої заняття та терміни виконання.</p>
                </div>
                <div>
                    <img src={block} alt="block" className='border-box bg-white w-10 h-auto'/>
                    <p className='text-black dark:text-sky-400 text-3xl font-bold mb-5'>Комунікація з викладачами та одногрупниками</p>
                    <p className='text-black dark:text-red-300 text-sm'>Залишайтеся на зв'язку та обмінюйтеся інформацією.</p>
                </div>
            </div>
            <div className='flex'>
                <Link to={"/temp-details"} className='box-border border-3 mr-2 px-6 py-3 w-auto text-white bg-black dark:bg-white dark:text-black cursor-pointer hover:border-purple-300 duration-150 ease-in'>Деталі</Link>
                <Link to={"/register"} className='box-border flex items-center px-6 py-3 w-auto text-white  cursor-pointer hover:border-purple-300 duration-150 ease-in hover:border-3'>Долучитися <img src={arrowR} alt=">"  className='w-5 ml-4 bg-amber-100'/></Link>
            </div>
        </div>
    )
}

export default FuncInfo