import React from 'react'
import tempImg from '../../../assets/stub.png'

function GenInfo() {
  return (
    <div className='mx-auto px-4 py-8 mt-8 md:mt-16 mb-16 md:mb-14'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
        <div className='w-full md:w-1/2 text-center md:text-left ml-10'>
          <p className='text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8'>
            Основні можливості "Студентського кабінету" для вашого успішного навчання
          </p>
          <p className='text-black text-base sm:text-lg md:text-xl font-medium'>
            Управляйте своїми курсами, переглядайте оцінки та плануйте розклад з легкістю. Наша платформа забезпечує інтуїтивно зрозумілий інтерфейс для максимальної зручності.
          </p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <img src={tempImg} alt="temp_img" />
        </div>
      </div>
    </div>
  );
}

export default GenInfo