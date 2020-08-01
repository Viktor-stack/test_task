import React from 'react';
import style from './month.module.scss'


const Calendar = (props) => {
    console.log(props.state)
    return (
        <div className={style.inner}>
            {props.state["2019"].map((i, index) => {
                return (
                    <div key={index}>
                        {i.length === 3 ?
                            <div className={style.box + ' ' + style.siry}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }{i.length === 6 ?
                            <div className={style.box + ' ' + style.blue}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }{i.length === 12 ?
                            <div className={style.box + ' ' + style.dark}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }{i.length === 9 ?
                            <div className={style.box + ' ' + style.green}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }{i.length === 15 ?
                            <div className={style.box + ' ' + style.dark}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }{i.length === 10 ?
                            <div className={style.box + ' ' + style.green}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }{i.length === 4 ?
                            <div className={style.box + ' ' + style.blue}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }{i.length === 5 ?
                            <div className={style.box + ' ' + style.blue}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }{i.length === 7 ?
                            <div className={style.box + ' ' + style.green}>
                                <div className={style.numberTitle}>{index + 1}</div>
                                <strong className={style.numberLength}>В етом месяце родилось:
                                    <p>{i.length} человек</p></strong>
                                <div className={style.hoverEffect}>
                                    {i.map((i, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={style.userBox}>
                                                    Имя: {i.lastName}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>: null
                        }
                    </div>
                )
            })}
        </div>
    );

};

export default Calendar;