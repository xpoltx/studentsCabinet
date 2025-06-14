import React from 'react'
import mail from '../../assets/mail.png'
import telegram from '../../assets/telegram.png'
import UserHeader from '../../components/Common/UserHeader';



const UserHome = () => {
  const tg_url = import.meta.env.VITE_TG_URL;
  const mail_to = `mailto:${import.meta.env.VITE_MAIL}`;

  const buttons = [
    {
      href: tg_url,
      alt: 'telegram',
      src: telegram
    },
    {
      href: mail_to,
      alt: 'mail',
      src: mail
    }
  ]


  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <UserHeader />
      <div className='flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 text-center'>
        <h1 className='text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight'>Ласкаво просимо до Студентського кабінету!</h1>
        <p className='text-base sm:text-lg text-gray-600 mb-3'>Використовуйте меню зліва для навігації.</p>
        <p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8'>Якщо виникнуть проблеми, Ви можете звернутись до служби підтримки</p>
        <div className='flex justify-center items-center space-x-6 sm:space-x-8 mt-4'>
          {buttons.map(button => (
            <a key={button.alt} href={button.href} target='_blank' rel='noopener noreferrer' className='transform transition-transform duration-200 hover:scale-110'><img src={button.src} alt={button.alt} className='w-6 sm:w-6 h-auto cursor-pointer' /></a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserHome