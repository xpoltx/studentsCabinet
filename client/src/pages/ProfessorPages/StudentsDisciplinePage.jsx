import React from 'react'
import { useParams } from 'react-router-dom'
import UserHeader from '../../components/UserHeader';
import StudsDiscipTable from '../../components/ProfComp/StudsDiscipTable';


const StudentsDisciplinePage = () => {
    const {id} = useParams();
    console.log(id)
    return (
    <div>
        <UserHeader/>
        <div className='flex justify-center items-center'>
            <StudsDiscipTable id={id} />
        </div>
    </div>
  )
}

export default StudentsDisciplinePage