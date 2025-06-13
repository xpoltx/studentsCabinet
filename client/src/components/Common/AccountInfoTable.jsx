import React from 'react'
import { groups, facultys, payments } from '../../services/constants/constants'
import { Link } from 'react-router-dom';


const AccountInfoTable = ({ role, accountData }) => {

    if (!accountData) {
        return <div className='flex justify-center items-center h-screen'>Дані не завантажені</div>
    }

    console.log(accountData)

    const groupField = role === 'student'
        ? (groups[accountData.group] || "Невідома група")
        : role === 'professor'
            ? (groups[accountData.curatedGroup] || "Невідома група")
            : "Невідома група";
    const facultyField = facultys[accountData.faculty] || "Невідомий факультет";
    const paymentField = payments[accountData.payment] || "Невідома форма оплати";


    return (
        <div className='p-5 bg-white rounded-lg shadow-md w-2/3 mx-auto'>
            <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>{accountData.userId.fullname}</h1>
            {role === 'student' ? (<>
                <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>Інформація про студента</h1>
                <table className='table-fixed w-full border-collapse border border-gray-300'>
                    <tbody>
                        <tr className='bg-gray-100'>
                            <td className='w-1/2 border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                Роль:
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                {role ? 'Студент' : 'Невизначена'}
                            </td>
                        </tr>
                        <tr className='bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                Курс:
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                {accountData.course}
                            </td>
                        </tr>
                        <tr className='bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                Група:
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                <Link to={`/group/${accountData.group}`}>{groupField}</Link>
                            </td>
                        </tr>
                        <tr className='bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                Факультет:
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                <Link to={`/faculty/${accountData.faculty}`}>{facultyField}</Link>
                            </td>
                        </tr>
                        <tr className='bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                                Оплата:
                            </td>
                            <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                                {paymentField}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>)
                :
                (<>
                    <h1 className='text-2xl font-bold text-center mb-4'>Інформація про викладача</h1>
                    <table className='table-fixed w-full border-collapse border border-gray-300'>
                        <tbody>
                            <tr className='bg-gray-100 cursor-default'>
                                <td className='border w-1/2 border-gray-300 px-4 py-2 font-semibold text-gray-700'>Роль:</td>
                                <td className='border border-gray-300 px-4 py-2 text-gray-600'>{role}</td>
                            </tr>
                            <tr className='bg-gray-100 cursor-default'>
                                <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>Куратор:</td>
                                <td className='border border-gray-300 px-4 py-2 text-gray-600'>{accountData.curator ? 'Так' : 'Ні'}</td>
                            </tr>
                            <tr className='bg-gray-100 cursor-pointer'>
                                <td className='border border-gray-300 px-4 py-2 font-semibold text-gray-700'>Куруєма група:</td>
                                <td className='border border-gray-300 px-4 py-2 text-gray-600'><Link to={`/group/${accountData.curatedGroup}`}>{groupField}</Link></td>
                            </tr>
                        </tbody>
                    </table>

                </>)}
        </div>
    )
}

export default AccountInfoTable