import React, { useContext, useState } from 'react'
import HeaderBar from '../../components/Main/HeaderBar'
import { toast } from 'react-toastify'
import { AppContent } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EmailVerify = () => {
  const [inputToken, setInputToken] = useState("");
  const {backendUrl} = useContext(AppContent);
  const navigate = useNavigate();

  const onSubmitVerify = async (e) => {
    try {
      e.preventDefault();
      if (!inputToken.trim()) {
        toast.error("Будь ласка, введіть код верифікації.");
        return;
      }
      
      const res = await axios.post(backendUrl + '/confirm-account', {
        inputToken
      });

      if (res.status === 200) {
        toast.success("Ваш аккаунт було веріфіковано!");
        navigate('/login');
      } else {
        toast.error(res.data?.message || res.data?.error || "Невідома помилка при верифікації."); 
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Сталася помилка при відправці запиту. Спробуйте пізніше.");
        console.error("Error during email verification:", error); 
      }
    }
  }
  
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'> 
      <HeaderBar />
      <div className='flex flex-grow items-center justify-center p-4'> 
        <form 
          onSubmit={onSubmitVerify} 
          className='w-full max-w-md p-6 sm:p-8 bg-white rounded-lg  text-center'>
          <h1 className='text-2xl sm:text-3xl font-bold text-black  mb-4'>
            Веріфікація електронної пошти
          </h1>
          <p className='text-sm sm:text-base text-gray-700  mb-6'>
            Скопіюйте та вставте у поле код, який вам надійшов на пошту.
          </p>
          
          <input 
            className='w-full px-4 py-2 mb-6 border border-gray-300  rounded-md 
                       bg-white  text-black  
                       placeholder-gray-400  
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                       transition duration-200 ease-in-out'
            type="text" 
            required 
            placeholder="Введіть код верифікації"
            value={inputToken} 
            onChange={(e) => setInputToken(e.target.value)}/>
          
          <button 
            type="submit" 
            className='w-full py-3 px-4 bg-black text-white   
                       font-semibold rounded-md hover:bg-gray-800  
                       focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                       transition duration-300 ease-in-out'>
            Підтвердити
          </button>
        </form>
      </div>  
    </div>
  )
}

export default EmailVerify