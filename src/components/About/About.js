import React from 'react';
import style from './about.module.css'
import photo from '../../my-photo.jpg'


const About = () => {
    return (
        <div className={style.box}>
            <div className={style.myPhoto}>
                <img src={photo} alt=""/>
            </div>
            <div className={style.desc}>
                <h1>Виктро Кулдоров</h1>
                <strong> Мне 27 лет</strong>
                <p>
                    <a href={"mailto:grohik493@gmail.com"}>grohik493@gmail.com</a>
                </p>
                <p>
                    <a href={"tel:380731364223"}>+380731364223</a>
                </p>
            </div>
        </div>
    );
};

export default About;