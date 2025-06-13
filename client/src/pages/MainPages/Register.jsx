import React, { useState } from 'react'; // useContext was not used, removed from import
import HeaderBar from '../../components/Main/HeaderBar';
import { Link } from 'react-router-dom';
import useRegistration from '../../hooks/useRegistration';
import InputField from '../../components/Main/InputField';

const Register = () => {
    const [inputs, setInputs] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
    });

    const { loading, register } = useRegistration();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(inputs.name + ' ' + inputs.lastname, inputs.email, inputs.password);
    };

    const fields = [
        {
            id: 'name',
            label: "Ім'я",
            type: 'text',
            placeholder: "Введіть ім'я",
            value: inputs.name,
            onChange: (e) => setInputs({ ...inputs, name: e.target.value })
        },
        {
            id: 'lastname',
            label: "Прізвище",
            type: 'text',
            placeholder: "Введіть прізвище",
            value: inputs.lastname,
            onChange: (e) => setInputs({ ...inputs, lastname: e.target.value })
        },
        {
            id: 'email',
            label: "Електронна пошта",
            type: 'email',
            placeholder: "Введіть пошта",
            value: inputs.email,
            onChange: (e) => setInputs({ ...inputs, email: e.target.value })
        },
        {
            id: 'password',
            label: "Пароль",
            type: 'password',
            placeholder: "Введіть пароль",
            value: inputs.password,
            onChange: (e) => setInputs({ ...inputs, password: e.target.value })
        }
    ]

    return (
        <div className='flex flex-col min-h-screen bg-gray-100'>
            <HeaderBar />

            <div className='flex flex-grow items-center justify-center p-4 sm:p-6 lg:p-8'>
                <div className='w-full max-w-md p-6 sm:p-8 bg-cyan-200/50 rounded-lg shadow-xl backdrop-blur-md text-center'>
                    <h1 className='text-3xl sm:text-4xl font-semibold text-black mb-6'>Реєстрація</h1>
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
                            <Link to={'/login'} className='text-gray-600 hover:text-purple-500 duration-150 text-sm'>Вже маєте обліковий запис?</Link>
                        </div>
                        <div className='flex items-center justify-between'>
                            <button
                                type="submit"
                                className='w-full py-3 px-4 bg-black text-white font-semibold  
                                           hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                                           transition duration-300 ease-in-out'
                                disabled={loading} >
                                {loading ? 'Завантаження...' : 'Зареєструватися'} 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;