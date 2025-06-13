import React from 'react'
import picPlaceholder from '../../../assets/picPlaceholder.png'
import linkedin from '../../../assets/linkedin.png'
import mail from '../../../assets/mail.png'
import telegram from '../../../assets/telegram.png'

const DevSection = () => {
    const linkedin_url = import.meta.env.VITE_LINKEDIN_URL;
    const tg_url = import.meta.env.VITE_TG_URL;
    const mail_to = `mailto:${import.meta.env.VITE_MAIL}`;
    
    return (
        <div className='flex flex-col items-center mb-40'>
            <div className='relative inset-x-0 top-0 text-center '>
                <p className='text-6xl font-bold mb-8'>Розробник</p>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                    <img src={picPlaceholder} alt="pic" className='rounded-full w-32 h-32 mb-4 bg-amber-200' />
                </div>
                <div className='text-center'>
                    <p className=' font-semibold text-xl '>Полторацький Сергій</p>
                    <p className=' font-light text-lg mb-3'>Менеджер проекту, розробник, тестувальник</p>
                    <div className='flex justify-center space-x-6'>
                        <a href={linkedin_url} target='_blank' rel='noopener noreferrer' className='w-6 h-auto cursor-pointer' ><img src={linkedin} alt="linkedIn" /></a>
                        <a href={tg_url} target='_blank' rel='noopener noreferrer' className='w-6 h-auto cursor-pointer'><img src={telegram} alt="telegram" /></a>
                        <a href={mail_to} target='_blank' rel='noopener noreferrer' className='w-6 h-auto cursor-pointer'><img src={mail} alt="mail" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevSection