import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContent } from '../context/AppContext';

const SideBar = ({ userRole }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { backendUrl } = useContext(AppContent);


    const handleLogout = async () => {
        try {
            const response = await axios.post(backendUrl + '/logout', {}, { withCredentials: true });
            if (response.status === 200) {
                localStorage.removeItem('User');
                toast.success('Logout successful');
                navigate('/');
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <>
            <button
                className='absolute top-4 left-4 z-5'
                onClick={() => setIsOpen(!isOpen)}>
                <img
                    src="../../public/logo.svg"
                    alt="logo"
                    className='border-box flex w-16  cursor-pointer mr-10 ml-6'
                />
            </button>
            <div className={`z-4 top-0 left-0 fixed bg-emerald-600/65 w-1/4 h-full p-10 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-300`}>
                <NavLinks role={userRole} />
                <button
                    onClick={handleLogout}
                    className="mt-35 box-border border-2 cursor-pointer hover:border-purple-300 duration-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full"
                >
                    Logout
                </button>
            </div>
        </>
    );
};

export default SideBar;