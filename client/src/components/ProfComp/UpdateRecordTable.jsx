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
        <div>
            <h1>Виставити оцінку</h1>
            <form onSubmit={handleSumbit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Дисципліна:</td>
                            <td>
                                <Link to={`/discipline/${data?.disciplineId._id}`}>{data?.disciplineId.name || ''}</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Студент:
                            </td>
                            <td>
                                <Link to={`/info/student/${data?.studentId._id}`}>{data?.studentId.fullname || ''}</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Оцінка:
                            </td>
                            <td>
                                <input type="number"
                                    min={0}
                                    max={100}
                                    name='grade'
                                    value={updatedGrade}
                                    onChange={(e) => setUpdatedGrade(Number(e.target.value))}
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
                    ) : null}
                </div>
            </form>
        </div>
    )
}

export default UpdateRecordTable