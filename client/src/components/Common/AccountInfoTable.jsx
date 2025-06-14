import React from 'react'
import { groups, facultys, payments } from '../../services/constants/constants'
import { Link } from 'react-router-dom';


const AccountInfoTable = ({ role, accountData }) => {

    if (!accountData) {
        return <div className='flex justify-center items-center h-screen'>Дані не завантажені</div>
    }

    const groupField = role === 'student'
        ? (groups[accountData.group] || "Невідома група")
        : role === 'professor'
            ? (groups[accountData.curatedGroup] || "Невідома група")
            : "Невідома група";
    const facultyField = facultys[accountData.faculty] || "Невідомий факультет";
    const paymentField = payments[accountData.payment] || "Невідома форма оплати";


    const studentRows = [
        {
            label: 'Роль:',
            value: role ? 'Студент' : 'Невизначена'
        },
        {
            label: 'Курс:',
            value: accountData.course
        },
        {
            label: 'Група:',
            value: <Link to={`/group/${accountData.group}`}>{groupField}</Link>
        },
        {
            label: 'Факультет:',
            value: <Link to={`/faculty/${accountData.faculty}`}>{facultyField}</Link>
        },
        {
            label: 'Оплата:',
            value: paymentField
        },
    ]

    const professorRows = [
        {
            label: 'Роль:',
            value: role
        },
        {
            label: 'Куратор:',
            value: accountData.curator ? 'Так' : 'Ні'
        },
        {
            label: 'Група:',
            value: <Link to={`/group/${accountData.curatedGroup}`}>{groupField}</Link>
        }
    ]

    return (
        <div className='p-5 bg-white rounded-lg shadow-md w-2/3 mx-auto'>
            <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>{accountData.userId.fullname}</h1>
            {role === 'student' ? (<>
                <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>Інформація про студента</h1>
                <table className='table-fixed w-full border-collapse border border-gray-300'>
                    <tbody>
                        {studentRows.map(row => (
                            <tr key={row.label} className='bg-gray-100'>
                                <td className='w-1/2 border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                    {row.label}
                                </td>
                                <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                    {row.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>)
                :
                (<>
                    <h1 className='text-2xl font-bold text-center mb-4'>Інформація про викладача</h1>
                    <table className='table-fixed w-full border-collapse border border-gray-300'>
                        <tbody>
                            {professorRows.map(row => (
                            <tr key={row.label} className='bg-gray-100'>
                                <td className='w-1/2 border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                    {row.label}
                                </td>
                                <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                    {row.value}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </>)}
        </div>
    )
}

export default AccountInfoTable