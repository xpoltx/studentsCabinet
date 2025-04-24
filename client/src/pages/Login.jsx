import React, { useContext, useState } from 'react'
import HeaderBar from '../components/HeaderBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password)
    }


    return (
        <div>
            <HeaderBar />
            <div className='relative inset-x-0 top-0  flex flex-col items-center justify-center w-1/4 min-w-88 h-auto px-8 py-12 bg-gray-400/10 bg-clip-padding backdrop-blur-lg mt-20 mx-auto mb-50'>
                <h1 className='text-4xl font-semibold text-gray-200'>
                    Логін
                </h1>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='mb-3'>
                        <label className='p-2'>
                            <span className='text-base'>Електронна пошта</span>
                        </label>
                        <input type="email" placeholder='Email'
                            required
                            value={email}
                            className='shadow w-full h-10 appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline '
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='p-2'>
                            <span className='text-base'>Пароль</span>
                        </label>
                        <input type="password"
                            placeholder='Password'
                            required
                            value={password}
                            className='shadow w-full h-10 appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline '
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='mb-3 text-right'>
                        <Link to="/register" className='hover:text-purple-300 duration-150'>Не маєте облікового запису?</Link>
                    </div>

                    <div className='flex items-center justify-between'>
                        <button className='box-border border-2 cursor-pointer hover:border-purple-300 duration-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full'>
                            Вхід
                        </button>
                    </div>

                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login