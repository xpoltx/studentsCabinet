import React from 'react'
import { Link } from 'react-router-dom'
const ProfDisciplineCard = ({disciplineData, path}) => {
return (
    <div className="w-full">
      <Link
        to={path}
        className="flex flex-col items-center justify-center w-full h-32 p-6 bg-white rounded-lg shadow-md 
        transition-all duration-100 ease-in-out
        hover:shadow-xl hover:border-2 hover:border-purple-300 mx-auto"
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center">{disciplineData.name}</h2>
      </Link>
    </div>
  )
}

export default ProfDisciplineCard