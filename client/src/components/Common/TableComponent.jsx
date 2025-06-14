import React from 'react'

const TableComponent = ({rows}) => {
    return (
        <table className='table-fixed w-full border-collapse border border-gray-300'>
            <tbody>
                {rows.map(row => (
                    <tr key={row.label} className='bg-gray-100'>
                        <td className='w-1/2 border border-gray-300 px-4 py-2 font-semibold text-gray-700'>
                            {row.label}
                        </td>
                        <td className='border border-gray-300 px-4 py-2 text-gray-600'>
                            {row.value || ''}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableComponent