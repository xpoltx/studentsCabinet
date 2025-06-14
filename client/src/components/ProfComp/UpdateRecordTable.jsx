import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { fetchStudentRecord, updateGrade } from '../../services/recordBookService'

import useMutation from '../../hooks/useMutation'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import TableComponent from '../Common/TableComponent'

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

    const updateRecordRows = [
        {
            label: 'Дисципліна:',
            value: <Link to={`/discipline/${data?.disciplineId._id}`}>
                {data?.disciplineId.name || ''}
            </Link>
        },
        {
            label: 'Студент:',
            value: <Link to={`/info/student/${data?.studentId._id}`} >
                {data?.studentId.fullname || ''}
            </Link>
        },
        {
            label: 'Оцінка:',
            value: <input
                                    type="number"
                                    min={0}
                                    max={100}
                                    name='grade'
                                    value={updatedGrade}
                                    onChange={(e) => setUpdatedGrade(Number(e.target.value))}
                                    className="w-full focus:border-emerald-500 focus:outline-none"
                                />
        }
    ]

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Виставити оцінку</h1>
            <form onSubmit={handleSumbit}>
                <TableComponent rows={updateRecordRows} />
                <div>
                    {changed ? (
                        <button
                            type='submit'
                            disabled={updLoading}
                            className='box-border border-2 cursor-pointer hover:border-purple-300 duration-300 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full mt-5'>
                            {updLoading ? "Збереження" : "Зберегти зміни"}
                        </button>
                        
                    ) : null}

                </div>
            </form>
        </div>
    )
}

export default UpdateRecordTable