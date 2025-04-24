import React, { useContext, useState } from 'react'
import HeaderBar from '../components/HeaderBar';
import { Link } from 'react-router-dom';
import useRegistration from '../hooks/useRegistration';

const Register = () => {
    const [inputs, setInputs] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
    });

    const { loading, register } = useRegistration()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(inputs.name + ' ' + inputs.lastname, inputs.email, inputs.password);
    }

    return (

        <div>
            <HeaderBar />
            <div className='relative inset-x-0 top-0  flex flex-col items-center justify-center w-1/4 min-w-88 h-auto px-8 py-12 bg-light-primary/10 dark:bg-dark-primary/10 bg-clip-padding backdrop-blur-lg mt-20 mx-auto'>
                <h1 className='text-4xl font-semibold text-gray-200'>Реєстрація</h1>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='mb-3'>
                        <label className='p-2'>
                            <span className='text-base'>Ім'я</span>
                        </label>
                        <input type="text"
                            placeholder='Name'
                            required
                            value={inputs.name}
                            className='shadow w-full h-10 appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline '
                            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='p-2'>
                            <span className='text-base'>Прізвище</span>
                            <input type="text"
                                placeholder='Last name'
                                required
                                value={inputs.lastname}
                                className='shadow w-full h-10 appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline '
                                onChange={(e) => setInputs({ ...inputs, lastname: e.target.value })}
                            />
                        </label>
                    </div>
                    <div className='mb-3'>
                        <label className='p-2'>
                            <span className='text-base'>Електронна пошта</span>
                        </label>
                        <input type="email" placeholder='email'
                            required
                            value={inputs.email}
                            className='shadow w-full h-10 appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline '
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='p-2'>
                            <span className='text-base'>Пароль</span>
                        </label>
                        <input type="password"
                            placeholder='Enter password'
                            required
                            value={inputs.password}
                            className='shadow w-full h-10 appearance-none border py-2 px-3 leading-tight focus:outline-none focus:shadow-outline '
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div className='mb-3 text-right'>
                        <Link to={'/login'} className='hover:text-purple-300 duration-150'>Вже маєте обліковий запис?</Link>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button className='box-border border-2 cursor-pointer hover:border-purple-300 duration-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full'>
                            Зареєструватися
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register