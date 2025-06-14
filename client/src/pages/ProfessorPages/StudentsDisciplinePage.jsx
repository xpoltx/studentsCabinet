import React from 'react'
import { useParams } from 'react-router-dom'
import UserHeader from '../../components/Common/UserHeader';
import StudsDiscipTable from '../../components/ProfComp/StudsDiscipTable';
import ReturnButton from '../../components/Common/ReturnButton';


const StudentsDisciplinePage = () => {
    const {id} = useParams();
    console.log(id)
    return (
    <div>
        <UserHeader/>
        <ReturnButton />
        <div className='flex justify-center items-center'>
            <StudsDiscipTable id={id} />
        </div>
    </div>
  )
}

export default StudentsDisciplinePage