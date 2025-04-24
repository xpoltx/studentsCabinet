import React from 'react'
import SideBar from '../components/SideBar'
import ProfilePic from '../components/ProfilePic'
import mail from '../assets/mail.png'
import telegram from '../assets/telegram.png'
import UserHeader from '../components/UserHeader'


const UserHome = () => {
    const tg_url = import.meta.env.VITE_TG_URL;
    const mail_to = `mailto:${import.meta.env.VITE_MAIL}`;
    const user = JSON.parse(localStorage.getItem('User'));
    const userRole = user?.role;
 
    return (
        <div>
        <UserHeader />
        <div className='flex flex-col items-center mt-40'>
          <h1 className='text-3xl font-bold mb-4'>Ласкаво просимо до Студентського кабінету!</h1>
          <p className='text-lg text-center mb-4'>Використовуйте меню зліва для навігації.</p>
          <p className='text-lg text-center'>Якщо виникнуть проблеми, Ви можете звернутись до служби підтримки</p>
          <div className='flex justify-center space-x-6 mt-4'>
          <a href={tg_url} target='_blank' rel='noopener noreferrer' className='w-6 h-auto cursor-pointer'><img src={telegram} alt="telegram" /></a>
          <a href={mail_to} target='_blank' rel='noopener noreferrer' className='w-6 h-auto cursor-pointer'><img src={mail} alt="mail" /></a>
          </div>
          </div>
      </div>
  )
}

export default UserHome