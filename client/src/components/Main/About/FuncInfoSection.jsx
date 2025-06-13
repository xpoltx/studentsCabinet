import React from 'react'
import blockph from '../../../assets/blockph.png'
import arrowR from '../../../assets/arrowR.png'
import { Link } from 'react-router-dom'

const FuncInfo = () => {

    const blocks = [
        {
            title: "Легкий доступ до навчальних матеріалів",
            desc: "Отримуйте доступ до всіх необхідних ресурсів за кілька кліків."
        },
        {
            title: "Управління розкладом та завданнями",
            desc: "Легко плануйте свої заняття та терміни виконання."
        },
        {
            title: "Комунікація з викладачами та одногрупниками",
            desc: "Залишайтеся на зв'язку та обмінюйтеся інформацією."
        },
    ]


    return (
        <div className='mx-auto px-4 py-12 md:py-20 md:ml-10 mb-14'>
            <div className='w-full lg:w-3/4 xl:w-2/3 mb-20'>
                <p className='text-black text-xl font-normal mb-2'>Функції</p>
                <p className='text-black text-6xl sm:text-4xl md:text-6xl font-bold mb-6'>Всі можливості вашого Студентського кабінету</p>
                <p className='text-black text-xl font-medium'>Cтудентський кабінет пропонує широкий спектр функцій, які спрощують навчальний процес. Від доступу до матеріалів до управління розкладом — все в одному місці.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14'>
                {blocks.map(block => (
                    <div key={block.title}
                        className='flex flex-col items-center text-center sm:items-start sm:text-start'>
                        <img src={blockph} alt="block" className='border-box bg-white w-10 h-auto' />
                        <p className='text-black text-3xl font-bold mb-5'>{block.title}</p>
                        <p className='text-black text-sm'>{block.desc}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                <Link to={"/temp-details"} className='box-border border-3 mr-2 px-6 py-3 w-auto text-white bg-black cursor-pointer hover:border-purple-300 duration-150 ease-in'>Деталі</Link>
                <Link to={"/register"} className='box-border border-3 flex items-center px-6 py-3 w-auto text-black cursor-pointer hover:border-purple-300 duration-150 ease-in'>Долучитися <img src={arrowR} alt=">" className='w-5 ml-4 bg-white' /></Link>
            </div>
        </div>
    )
}

export default FuncInfo