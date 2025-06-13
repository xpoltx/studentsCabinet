import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { fetchStudentRecord, updateGrade } from '../../services/recordBookService'

import useMutation from '../../hooks/useMutation'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateRecordTable = ({ disciplineId, studentId }) => {
    const { data, loading, error, refetch } = useFetch(() => fetchStudentRecord({ studentId, disciplineId }))
    const [initGrade, setInitGrade] = useState();
    const [updatedGrade, setUpdatedGrade] = useState();
    const [changed, setChanged] = useState(false);

    const { mutate, loading: updLoading, error: updError } = useMutation(updateGrade);

    useEffect(() => {
        if (data) {
            setInitGrade(data.grade || 0);
            setUpdatedGrade(data.grade || 0);
        }
    }, [data]);

    useEffect(() => {
        setChanged(initGrade !== updatedGrade);
    }, [initGrade, updatedGrade]);

    console.log(changed);
    if (!data) {
        return <div className='flex justify-center items-center h-screen'>Завантаження інформації...</div>;
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log(123)
        if (changed && initGrade !== undefined) {
            try {
                const updGrade = await mutate({
                    studentId,
                    disciplineId,
                    updatedGrade
                });
                console.log(updGrade);
                setInitGrade(updatedGrade);
                setChanged(false);
                toast.success("Grade updated successfully");
                refetch();
            } catch (error) {
                toast.error(error);
            }
        }
    }

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Виставити оцінку</h1>
            <form onSubmit={handleSumbit}>
                <table className="w-full mb-4 border-separate border-spacing-y-2">
                    <tbody>
                        <tr>
                            <td className="w-1/2 border border-gray-300 px-4 py-2 font-bold text-gray-700">Дисципліна:</td>
                            <td className="border border-gray-300 px-4 py-2 font-normal text-gray-700">
                                <Link to={`/discipline/${data?.disciplineId._id}`}>
                                    {data?.disciplineId.name || ''}
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-bold text-gray-700">Студент:</td>
                            <td className="border border-gray-300 px-4 py-2 font-normal text-gray-700">
                                <Link to={`/info/student/${data?.studentId._id}`} >
                                    {data?.studentId.fullname || ''}
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-bold text-gray-700">Оцінка:</td>
                            <td>
                                <input
                                    type="number"
                                    min={0}
                                    max={100}
                                    name='grade'
                                    value={updatedGrade}
                                    onChange={(e) => setUpdatedGrade(Number(e.target.value))}
                                    className="w-full px-4 py-2 border border-gray-300 focus:border-emerald-500 focus:outline-none"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    {changed ? (
                        <button
                            type='submit'
                            disabled={updLoading}
                            className='box-border border-2 cursor-pointer hover:border-purple-300 duration-300 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full'>
                            {updLoading ? "Збереження" : "Зберегти зміни"}

                        </button>
                        //                         <button
                        //                             type='submit'
                        //                             disabled={updLoading}
                        //                             className='w-full py-2 px-4 font-bold rounded border-2 border-emerald-600 bg-emerald-500 text-white hover:bg-emerald-600 hover:border-emerald-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:opacity-60'
                        //                         >
                        //                             {updLoading ? "Збереження..." : "Зберегти зміни"}
                        //                         </button>
                    ) : null}

                </div>
            </form>
        </div>
    )
}

export default UpdateRecordTable