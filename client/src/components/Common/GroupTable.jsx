import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { fetchGroup } from '../../services/studentsService';
import DataLoader from './DataLoader';


const GroupTable = ({ groupName }) => {

  const { data, loading, error } = useFetch(() => fetchGroup({ groupName }));

  return (
    <DataLoader loading={loading} error={error} data={data}>
      <div className='p-4 sm:p-6 lg:p-8 mt-8 sm:mt-10 md:mt-12 bg-white rounded-lg shadow-md w-full max-w-lg mx-auto'>
        <h2 className='text-2xl sm:text-3xl font-bold mb-3 text-gray-800 text-center cursor-default'>
          Група: <span className='font-semibold '>{groupName}</span>
        </h2>
        <h2 className='text-lg sm:text-xl font-bold mb-4 text-gray-800 text-center cursor-default'>
          Куратор: {' '}  
          <Link 
            to={`/info/professor/${data?.curatorData?.curatorName?._id}`}
            className='font-semibold hover:text-purple-700 hover:underline transition duration-200 ease-in-out'>
            {data?.curatorData?.curatorName?.fullname} 
          </Link>
        </h2>
        {data?.groupData?.students?.length > 0 ? (
          <ul className='text-gray-700 divide-y divide-gray-200'> 
            {data.groupData.students.map((student, index) => (
              <li className='py-3 sm:py-4 font-medium text-base sm:text-lg last:border-b-0' key={index}> 
                <Link 
                  to={`/info/student/${student.userId}`} 
                  className='block hover:text-purple-600 transition duration-200 ease-in-out' >
                  {index + 1}. {student.fullname}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center text-gray-600 py-6'>Студентів у цій групі не знайдено.</p> 
        )}

      </div>
    </DataLoader>
  )

}

export default GroupTable;