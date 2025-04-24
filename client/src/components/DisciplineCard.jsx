import React from 'react'
import { Link } from 'react-router-dom'
const DisciplineCard = ({disciplineData}) => {
  return (
    <div>
        <Link 
        to={`/discipline/${disciplineData.disciplineId}`} 
        className='flex justify-center items-center w-full h-full p-4 bg-white/30 backdrop-blur-md rounded-lg shadow-md mx-auto mt-10'>
            <h2 className='text-xl font-semibold text-gray-800'>{disciplineData.name}</h2>
        </Link>
    </div>
  )
}

export default DisciplineCard