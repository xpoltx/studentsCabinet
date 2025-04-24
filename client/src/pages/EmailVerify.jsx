import React, { useContext, useState } from 'react'
import HeaderBar from '../components/HeaderBar'
import Footer from '../components/Footer'
import { toast } from 'react-toastify'
import { AppContent } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EmailVerify = () => {
  const [inputToken, setInputToken] = useState("");
  const {backendUrl} = useContext(AppContent);
  const navigate = useNavigate();

  const onSubmitVerify = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(backendUrl + '/confirm-account',{
        inputToken
      });
      if(res.status === 200){
        toast.success("Ваш аккаунт було веріфіковано!")
        navigate('/login');
      }else{
        toast.error(res.error);
      }
    } catch (error) {
      toast.error(error);
    }
  }
  

  return (
    <div>
      <HeaderBar />
      <div className='flex items-center mt-30 justify-center'>
        <form>
          <h1>Веріфікація електронної пошти</h1>
          <p>Скопіюйте та вставте у поле код, який вам надійшов на пошту</p>
          <input className='shadow w-full h-10 appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ' 
          type="text" 
          required 
          onChange={(e) => setInputToken(e.target.value)}
          />
          <button onClick={onSubmitVerify} className='w-full box-border border-2 cursor-pointer hover:border-purple-300 duration-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline'>Підтвердити</button>
        </form>



      </div>
      <Footer />
    </div>
  )
}

export default EmailVerify