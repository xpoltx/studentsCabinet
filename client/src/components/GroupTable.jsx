import React, { useEffect, useState, useContext } from 'react'
import useGetGroup from '../hooks/useGetGroup';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const GroupTable = ({ groupName }) => {

  const [group, setGroup] = useState({});
  const { loading, error, getGroupData } = useGetGroup({ groupName });
  const [students, setStudents] = useState([]);
  const [curator, setCurator] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const group = await getGroupData();
        if (group) {
          setGroup(group.groupData);
          setStudents(group.groupData.students);
          setCurator(group.curatorData.curatorName);
          return;
        } else {
          toast.error('No group data found');
        }
      } catch (error) {
        toast.error('Error fetching group data: ' + error.message);
      }
    }
    fetchData();
  }, []);

  console.log(students)
  console.log(curator)

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }
  if (error) {
    return <div className='flex justify-center items-center h-screen'>{error}</div>;
  }


  return (

    <div className='p-5 mt-10 bg-white rounded-lg shadow-md w-1/4 mx-auto'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 text-center cursor-default'>Група: <span className='font-semibold'>{groupName}</span></h2>
      <h2 className='text-2xl font-bold mb-4 text-gray-800 text-center cursor-default'>Куратор: <Link to={`/info/professor/${curator._id}`} className='font-semibold hover:underline'>
      {curator.fullname}
      </Link></h2>
      
      {group.students?.length > 0 ? (
        <ul className=' text-gray-700'>
          {students.map((student, index) => (
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