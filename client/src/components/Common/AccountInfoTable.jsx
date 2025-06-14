import React from 'react'
import { groups, facultys, payments } from '../../services/constants/constants'
import { Link } from 'react-router-dom';
import TableComponent from './TableComponent';


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
            <h1 className='text-2xl font-bold mb-4 text-gray-800 text-center'>{accountData.userId?.fullname}</h1>
            {role === 'student' ? (<>
                <h1 className='text-2xl font-bold text-gray-800 text-center mb-4'>Інформація про студента</h1>
                <TableComponent rows={studentRows} />
            </>)
                :
                (<>
                    <h1 className='text-2xl font-bold text-center mb-4'>Інформація про викладача</h1>
                    <TableComponent rows={professorRows} />
                </>)}
        </div>
    )
}

export default AccountInfoTable