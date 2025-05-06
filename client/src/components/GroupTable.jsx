import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchGroup } from '../services/studentsService'; 


const GroupTable = ({ groupName }) => {

  const {data, loading, error} = useFetch(()=>fetchGroup({groupName}));

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }
  if (error) {
    toast.error(error);
    return <div className='flex justify-center items-center h-screen'>{error}</div>;
  }

  if(!data){
    return <div className='flex justify-center items-center h-screen'>No students found in this group</div>;
  }

  return (

    <div className='p-5 mt-10 bg-white rounded-lg shadow-md w-1/4 mx-auto'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 text-center cursor-default'>Група: <span className='font-semibold'>{groupName}</span></h2>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 text-center cursor-default'>Куратор: 
      <Link to={`/info/professor/${data.curatorData.curatorName._id}`} className='font-semibold hover:underline'>
      {data.curatorData.curatorName.fullname}
      </Link></h2>
      
      {data.groupData.students?.length > 0 ? (
        <ul className=' text-gray-700'>
          {data.groupData.students.map((student, index) => (
            <li className='py-2 font-semibold w-full cursor-pointer text-xl' key={index}>
              <Link to={`/info/student/${student.userId}`}>{index + 1}. {student.fullname}</Link>
              <hr className='border-t border-black w-full my-2' />
            </li>
          ))}
        </ul>
      )
        :
        (
          <p className='text-center'>No students found in this group</p>
        )
      }

    </div>
  )
}

export default GroupTable