import React from 'react';
import {NavLink} from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <>
            <h1 style={{textAlign: 'center', margin: '0', paddingBottom: '15px'}}>Тестовое Задание</h1>
            <nav className={'menu'}>
                <ul>
                    <li>
                        <NavLink className={'list'} to={'/'} exact>
                            О бо Мне
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={'list'} to={'/list'}>
                            Список Пользовательей
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={'list'} to={'/calendar'}>
                            Календарь
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;