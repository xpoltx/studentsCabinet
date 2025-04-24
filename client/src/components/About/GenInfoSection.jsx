import React from 'react'
import tempImg from '../../assets/bg.jpg'

function GenInfo() {
  return (
    <div className='relative mt-16 ml-10 flex mb-30'>
        <div className='w-1/2 pr-8'>
            <p className='text-black dark:text-sky-400 text-6xl font-bold mb-8'>
                Основні можливості "Студентського кабінету" для вашого успішного навчання
            </p>
            <p className='text-black dark:text-red-300 text-xl font-medium'>
                Управляйте своїми курсами, переглядайте оцінки та плануйте розклад з легкістю. Наша платформа забезпечує інтуїтивно зрозумілий інтерфейс для максимальної зручності.                
            </p>
        </div>
        <div className='w-1/2 flex justify-end'>
            <img src={tempImg} alt="temp_img" className='mr-10 max-w-full h-auto' />
        </div>
    </div>
  )
}

export default GenInfo