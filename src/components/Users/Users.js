import React from 'react';
import s from './users.module.css'

const User = (props) => {
    return (
        <div>
            <h1 className={s.title}>Список Пользователий</h1>
            {props.state.user.map((items, index) => {
                return (
                    <ul key={index}>
                        <li className={s.box}>
                            <h2 style={{color: 'red'}}>ID: {items.id}</h2>
                            <h3 style={{color: 'blue'}}>Фамилия: {items.lastName}</h3>
                            <strong>Имя: {items.firstName}</strong>
                            <h4>Дата рождения: {items.dob}</h4>
                        </li>
                    </ul>
                )
            })}

        </div>
    );
}

export default User;