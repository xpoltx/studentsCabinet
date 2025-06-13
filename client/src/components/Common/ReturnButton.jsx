import React from 'react'

const ReturnButton = () => {
    const handleReturn = () => {
        window.history.back();
    }
    return (
        <div className='absolute left-1/6 top-1/7 hidden sm:block z-10'>
            <button onClick={handleReturn} className='box-border border-2 border-black px-6 py-1 cursor-pointer hover:border-purple-300 duration-300 ease-in'>
                &larr;Назад
            </button>
        </div>
    )
}

export default ReturnButton