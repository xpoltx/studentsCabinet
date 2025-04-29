import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useMutation from '../../hooks/useMutation';
import { fetchDisciplineInfo, updateDiscipline } from '../../hooks/api';
import useFetch from '../../hooks/useFetch';

const UpdateDisciplineTableInfo = ({ id }) => {
    const { data, loading, error, refetch } = useFetch(() => fetchDisciplineInfo(id));
    const [initData, setInitData] = useState();
    const [updatedData, setUpdatedData] = useState();
    const [changed, setChanged] = useState(false);
    const { mutate, loading: updLoading, error: updError } = useMutation(updateDiscipline)

    useEffect(() => {
        if (data) {
            setInitData(data);
            setUpdatedData(data);
        }
    }, [data]);

    useEffect(() => {
        if (initData && updatedData) {
            setChanged(JSON.stringify(initData) !== JSON.stringify(updatedData));
        } 
    }, [initData, updatedData]);

    if (!data) {
        return <div className='flex justify-center items-center h-screen'>Завантаження інформації про дисципліну...</div>;
    }
    const handleSumbit = async (e) => {
        e.preventDefault();
        if(changed && initData){
            try {
                const updatedDiscipline = await mutate({
                    disciplineId: initData._id,
                    updatedData,
                });
                setInitData(updatedDiscipline);
                setChanged(false);
                toast.success("Discipline updated successfully");
                refetch();
            } catch (error) {
                toast.error(error);
            }
        }
        
    }



    return (
        <div className='p-5 mt-10 bg-white rounded-lg shadow-md w-2/3 mx-auto cursor-default'>
            <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'> Оновити інформацію про дисципліну {data.name || ''}</h1>
            <form onSubmit={handleSumbit}>
                <table className='table-fixed w-full border-collapse border border-gray-300'>
                    <tbody>
                        <tr className='bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                Назва дисципліни:
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                <input
                                    type="text"
                                    name='name'
                                    value={updatedData?.name || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
                                    className='w-full py-2 px-1 '
                                />
                            </td>
                        </tr>
                        <tr className='bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                Курс:
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                <input
                                    type="number"
                                    min={1}
                                    max={6}
                                    name='course'
                                    value={updatedData?.course || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, course: e.target.value })}
                                    className='w-full py-2 px-1 appearance-none'
                                />
                            </td>
                        </tr>
                        <tr className='bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                Опис:
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                <input
                                    type="text"
                                    name='desc'
                                    value={updatedData?.desc || ''}
                                    onChange={(e) => setUpdatedData({ ...updatedData, desc: e.target.value })}
                                    className='w-full py-2 px-1 '
                                />
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div className='flex items-center justify-between mt-5'>
                    {changed ? (
                        <button
                            type='submit'
                            disabled={loading}
                            className='box-border border-2 cursor-pointer hover:border-purple-300 duration-300 text-black font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full'>
                            {loading ? "Збереження..." : "Зберегти зміни"}
                        </button>
                    ) : null}
                </div>
            </form>


        </div>
    )
}

export default UpdateDisciplineTableInfo