import React from 'react';
import Phone from '../../../../assets/icons/mainphone.png'
import Apple from '../../../../assets/icons/apple.png'
import Google from '../../../../assets/icons/Google Play.png'
import Support from '../../../../assets/icons/support.svg'
import classes from "./MainPage.module.scss";
import Image from "next/image";

const MainPage = () => {
    return (
        <div >
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:100, flexWrap:"wrap"}}>
        <div style={{padding:'5%'}}>
            <Image src={Phone} height={600}/>
        </div>
            <div className={classes.div}>
                <h1 className={classes.h1}>В приложении ещё удобней!</h1>
                <div className={classes.div} style={{display:"flex", gap:30,}}>
                <a  href="#">
                    <Image src={Apple} height={65}/>
                </a>
                <a target='_blank' rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.tariel.alarmclientapp">
                    <Image src={Google} height={65}/>
                </a>
                </div>
                <p className={classes.text}>
                    Главное преимущество нашей «G-SOS» услуги – через несколько минут после нажатия ближайший экипаж реагирования будет на месте.
<br/>
                    Приложение для Вашего смартфона – это отличный инструмент для того, чтобы Вы и Ваши близкие чувствовали себя в безопасности в любой точке города.
                </p>
                <p className={classes.text}>
                   <span style={{fontWeight:"bold"}}>GARNIZON</span> – имеет опыт работы по организации охраны бизнес и торговых центров, офисов,
                    гостиниц, кафе, складов, закрытых жилых комплексов с 20хх года и является ведущим в области
                    организации охраны.
                </p>
            </div>
            {/*<div style={{position:"relative", top:290}}>*/}
            {/*<Support/>*/}
            {/*</div>*/}
        </div>
        </div>
    );
};

export default MainPage;