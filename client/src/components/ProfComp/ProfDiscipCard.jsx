import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const ProfDisciplineCard = ({disciplineData, path}) => {
  return (
    <div>
        <Link 
        to={path} 
        className='flex justify-center items-center w-full h-full p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md mx-auto mt-10'>
            <h2 className='text-xl font-semibold text-gray-800'>{disciplineData.name}</h2>
        </Link>
    </div>
  )
}

export default ProfDisciplineCard