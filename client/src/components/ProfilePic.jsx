import React from 'react'

const ProfilePic = () => {
    const user = JSON.parse(localStorage.getItem('User'));
    const profilePicUrl = user?.profilePic;
    const fullname = user?.fullname
    return (
        <div className='flex items-center'>
            <p className='font-semibold text-xl mr-5 cursor-default'>{fullname}</p>
            <img src={profilePicUrl} alt="Мій профіль" className='w-10 h-10 rounded-full cursor-pointer' />
        </div>
    )
}

export default ProfilePic