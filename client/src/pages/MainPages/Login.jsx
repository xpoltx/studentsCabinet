import React, { useContext, useState } from 'react'
import HeaderBar from '../../components/Main/HeaderBar';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import InputField from '../../components/Main/InputField';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password)
    }

    const fields = [
        {
            id: 'email',
            label: 'Електронна пошта',
            type: 'email',
            placeholder: 'Введіть електронну пошту',
            value: email,
            onChange: (e) => setEmail(e.target.value)
        },
        {
            id: 'password',
            label: 'Пароль',
            type: 'password',
            placeholder: 'Введіть пароль',
            value: password,
            onChange: (e) => setPassword(e.target.value)
        }
    ]

    return (
        <div className='flex flex-col min-h-screen bg-gray-100'>
            <HeaderBar />
            <div className='flex flex-grow items-center justify-center p-4 sm:p-6 lg:p-8'>
                <div className='w-full max-w-md p-6 sm:p-8 bg-cyan-200/50 rounded-lg shadow-xl backdrop-blur-md text-center'>
                    <h1 className='text-3xl sm:text-4xl font-semibold text-black mb-6'>
                        Логін
                    </h1>
                    <form onSubmit={handleSubmit} className='w-full space-y-4'>
                        {fields.map(field => (
                            <InputField
                                key={field.id}
                                id={field.id}
                                label={field.label}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        ))}
                        <div className='text-right'>
                            <Link to="/register" className='text-gray-600 hover:text-purple-500 duration-150 text-sm'>Не маєте облікового запису?</Link>
                        </div>

                        <div className='flex items-center justify-between'>
                            <button className='w-full py-3 px-4 bg-black text-white font-semibold 
                                           hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                                           transition duration-300 ease-in-out'>
                                Вхід
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login