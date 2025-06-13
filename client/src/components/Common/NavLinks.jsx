import React from 'react'
import NavLink from './NavLink';

const NavLinks = ({ role, onClose }) => {

    const commonLinks = [
        {
            path: '/user-home',
            label: 'Головна сторінка'
        },
        {
            path: '/main-info',
            label: 'Загальна інформація'
        }
    ];

    const studentLinks = [
        {
            path: '/record-book',
            label: 'Залікова книжка'
        },
        {
            path: '/curriculum',
            label: 'Навчальний план'
        },
        {
            path: '/schedule',
            label: 'Розклад   '
        }
    ];
    const professorLinks = [
        {
            path: '/disciplines',
            label: 'Редагувати дисципліну'
        },
        {
            path: '/records',
            label: 'Виставити оцінки'
        }
    ];

    return (
        <div>
            <div className='flex flex-col items-start space-y-4 mt-25 overflow-x-hidden'>
                {commonLinks.map(link => (
                    <NavLink
                        key={link.label}
                        path={link.path}
                        label={link.label}
                        onClick={onClose}
                    />
                ))}

                {role === 'student' && (
                    <>
                        {studentLinks.map(link => (
                            <NavLink
                                key={link.label}
                                path={link.path}
                                label={link.label}
                                onClick={onClose}
                            />
                        ))}
                    </>
                )}
                {role === 'professor' && (
                    <>
                        {professorLinks.map(link => (
                            <NavLink
                                key={link.label}
                                path={link.path}
                                label={link.label}
                                onClick={onClose}
                            />
                        ))}
                    </>
                )}

            </div>
        </div>
    )
}

export default NavLinks