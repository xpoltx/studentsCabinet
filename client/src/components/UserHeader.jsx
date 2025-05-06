import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import ProfilePic from './ProfilePic'
import { AppContent } from '../context/AppContext';

const UserHeader = () => {
    const { userRole } = useContext(AppContent);

    return (
        <div>
            <div className='flex px-4 py-3 justify-between items-center'>
                <SideBar userRole={userRole} />
                <div className='flex-grow flex justify-end p-4'>
                    <ProfilePic />
                </div>
            </div>
        </div>
    )
}

export default UserHeader