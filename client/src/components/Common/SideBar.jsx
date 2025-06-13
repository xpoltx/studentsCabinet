import React, { useContext } from 'react'
import NavLinks from './NavLinks';
import useLogin from '../../hooks/useLogin';
import ReturnButton from './ReturnButton';


const SideBar = ({ userRole, isOpen, setIsOpen }) => {
    const { loading, logout } = useLogin();


    const handleLogout = async (e) => {
        e.preventDefault();
        await logout();
    }

    return (
        <>
            {isOpen && (
                <div
                    className='fixed inset-0 bg-gray bg-opacity-50 z-30 md:hidden' // Higher z-index to cover header
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
            <ReturnButton />
            
            <div className={`z-35 top-0 left-0 fixed bg-emerald-600/65 
                transition-transform ease-in-out 
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} h-full p-10
                md:translate-x-0 md:w-1/6`}>
                <NavLinks role={userRole} />
                <button
                    onClick={handleLogout}
                    className="mt-25 box-border border-2 cursor-pointer hover:border-purple-300 duration-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full"
                >
                    Вихід
                </button>
            </div>
        </>
    );
};

export default SideBar;