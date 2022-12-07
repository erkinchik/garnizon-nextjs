import React, {useState} from 'react';
import stales from './Loading.module.scss'
import Strelka from '../../../../assets/icons/strelka.svg'
import Modal from "components/Modal/Modal";
const Lading = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalActivee, setModalActivee] = useState(false)
    return (
        <div className={stales.background}>
        <div className={stales.zajita}>
            <div style={{margin:"10% 7% 10% "}}>
            <h1 style={{color:" #FFFFFF",  fontSize:45}}>GARNIZON</h1>
            <p style={{color:" #FFFFFF", fontSize:18, maxWidth:700}}>Имеет опыт работы по организации охраны бизнес и торговых центров,
                офисов, гостиниц, кафе, складов, закрытых жилых комплексов с 20хх года
                и является ведущим в области организации охраны.
                На протяжении … лет обеспечиваем безопасность частных лиц и разнообразных объектов в Кыргызстане.
                Все сотрудники компании — профессионалы, бывшие военные, прошедшие спецподготовку и готовы вступить в бой в любую секунду.
                «Гарнизон» предлагает комплексное решение организации личной безопасности, охраны объектов, сопровождения грузов, ценных вещей и пр.
                Нам доверяют самое ценное, потому что мы ПРОФЕССИОНАЛЫ!
                Позаботьтесь о БЕЗОПАСНОСТИ своего жилья, бизнеса, детей уже сегодня! Широкий спектр оказываемых услуг.
            </p>
                <div style={{display:"flex", gap:40, margin:"3% 0"}}>
                <button className={stales.bth} onClick={() => setModalActive(true)}>Получить защиту</button>
                    {/*<button className={stales.bth} onClick={() => setModalActivee(true)} >Поддержка клиентов</button>*/}

                </div>
            </div>
        </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div style={{display:"flex", flexDirection:"column", gap:20}}>
                <h2 style={{color: "#FFFFFF", cursor:"pointer"}}>Личный кабинет</h2>
                <h2 style={{color: "#FFFFFF", cursor:"pointer"}}>Пополонить баланс </h2>
                <h2 style={{color: "#FFFFFF", cursor:"pointer"}}>Скачать приложение</h2>
                    <div style={{margin:"25px 0", cursor:"pointer"}} onClick={() => setModalActive(false)}>
                <Strelka/>
                    </div>
                </div>

            </Modal>
            {/*<Modal active={modalActivee} setActive={setModalActivee}>*/}
            {/*    <div style={{display:"flex", flexDirection:"column", gap:20}}>*/}
            {/*        <h2 style={{color: "#FFFFFF", cursor:"pointer"}}>Физическая охрана</h2>*/}
            {/*        <h2 style={{color: "#FFFFFF", cursor:"pointer"}}>Пультовая охрана </h2>*/}
            {/*        <h2 style={{color: "#FFFFFF", cursor:"pointer"}}>Личная охрана </h2>*/}
            {/*        <h2 style={{color: "#FFFFFF", cursor:"pointer"}}>Охрана недвижимости</h2>*/}
            {/*        <h2 style={{color: "#FFFFFF", cursor:"pointer"}}>Охрана и сопровождение грузов </h2>*/}
            {/*        <button className={stales.bth} >Получить защиту</button>*/}
            {/*        <div style={{margin:"25px 0", cursor:"pointer"}} onClick={() => setModalActivee(false)}>*/}
            {/*            <Strelka/>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</Modal>*/}
        </div>
    );
};

export default Lading;