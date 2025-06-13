import React, { useContext, useState } from 'react'
import SideBar from './SideBar'
import ProfilePic from './ProfilePic'
import { AppContent } from '../../context/AppContext';

const UserHeader = () => {
    const { userRole } = useContext(AppContent);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    return (
        <div>
            <SideBar userRole={userRole} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className='flex px-4 py-3 justify-between items-center bg-cyan-200/30 backdrop-blur-[2px] z-5 '>
                <button
                    className='md:hidden text-black text-6xl focus:outline-none z-25 hover:text-purple-300 duration-150 ease-in'
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    aria-label={isSidebarOpen ? "Закрити меню" : "Відкрити меню"}>
                    =
                </button>
                <div className='flex-grow flex justify-end p-4'>
                    <ProfilePic />
                </div>
            </div>
        </div>
    )
}

export default UserHeader