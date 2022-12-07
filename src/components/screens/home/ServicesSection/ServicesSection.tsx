
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Carousel, Radio } from 'antd';
import type { DotPosition } from 'antd/es/carousel';
import {Card, notification} from 'antd';
import Zajita from '../../../../assets/icons/zajita.svg';
import Check from '../../../../assets/icons/check.svg';
import styles from './Services.module.scss';
import {useAppSelector} from "hooks/useAppSelector";



const gridStyle: React.CSSProperties = {
    width: '250px',
    height: '500px',
    textAlign: 'center',
};

const carouselStyle: React.CSSProperties = {
    width: '90%',
    height: '100%',
    textAlign: 'center',
    margin:"0 19px",
};
const ServicesSection: React.FC = () => {
    const { isAuth } = useAppSelector((s: any) => s.auth);
    const openNotification = () => {
        notification.error({
            message: `Вы не Авторизованы!`,
            description: "Для покупки подписки авторизуйтесь",
            placement: "topLeft",
        });
    };
    const openModal = () => {
        notification.error({
            message: `12122112`,
            description: "21122112",
            placement: "topLeft",
        });
    };
    const [dotPosition, setDotPosition] = useState<DotPosition>("top");
    const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
        setDotPosition(value);
    };
    return (
        <div>
            <div >
            <h1 style={{margin:"50px 0", textAlign:"center",   color:'#0075FF', fontWeight:800}}>Тарифы</h1>
                <div className={styles.carousels}>

                    <Carousel  dotPosition={dotPosition} autoplay >
                        <div>
                            <Card.Grid className={styles.card} style={carouselStyle}>
                                <div>
                                    <Zajita/>
                                    <h2 style={{ color:"#0075FF"}}>Стандартный</h2>
                                    <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>1 Вызов</p>
                                    <div >
                                        <h1 style={{color:"#0075FF"}}>500 сом</h1>
                                        <button  onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                                    </div>
                                </div>
                            </Card.Grid>
                        </div>
                        <div>
                            <Card.Grid className={styles.card} style={carouselStyle}>
                                <div>
                                    <Zajita/>
                                    <h2 style={{ color:"#0075FF"}}>Семейный (1+3)</h2>
                                    <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>5 Вызовов</p>
                                    <div>
                                        <h1 style={{color:"#0075FF"}}>1600 сом</h1>
                                        <button onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                                    </div>
                                </div>
                            </Card.Grid>
                        </div>
                        <div>
                            <Card.Grid className={styles.card} style={carouselStyle}>
                                <div>
                                    <Zajita/>
                                    <h2 style={{ color:"#0075FF"}}>VIP(1+3)</h2>
                                    <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>Без ограничений</p>
                                    <div>
                                        <h1 style={{color:"#0075FF"}}>3000 сом</h1>
                                        <button onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                                    </div>
                                </div>
                            </Card.Grid>
                        </div>
                        <div>
                            <Card.Grid className={styles.card} style={carouselStyle}>
                                <div style={{height:330}}>
                                    <Zajita/>
                                    <h2 style={{color:"#0075FF"}}>Коммерческий (Индивидуальный)</h2>
                                    <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>По договору</p>
                                    <div className={styles.bth_carousel}>
                                        <button onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                                    </div>
                                </div>
                            </Card.Grid>
                        </div>
                    </Carousel>
                </div>

            <div className={styles.adaptiv} >
                <Card.Grid className={styles.card} style={gridStyle}>
                    <div>
                        <Zajita/>
                        <h2 style={{margin:"40px 0", color:"#0075FF"}}>Стандартный</h2>
                        <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>1 Вызов</p>
                        <div style={{margin:"70px 0"}}>
                            <h1 style={{color:"#0075FF"}}>500 сом</h1>
                            <button  onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                        </div>
                    </div>
                </Card.Grid>
                <Card.Grid className={styles.card} style={gridStyle}>
                    <div>
                        <Zajita/>
                        <h2 style={{margin:"40px 0", color:"#0075FF"}}>Семейный (1+3)</h2>
                        <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>5 Вызовов</p>
                        <div style={{margin:"70px 0"}}>
                            <h1 style={{color:"#0075FF"}}>1600 сом</h1>
                            <button onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                        </div>
                    </div>
                </Card.Grid>
                <Card.Grid className={styles.card} style={gridStyle}>
                    <div>
                        <Zajita/>
                        <h2 style={{margin:"40px 0", color:"#0075FF"}}>VIP(1+3)</h2>
                        <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>Без ограничений</p>
                        <div style={{margin:"70px 0"}}>
                            <h1 style={{color:"#0075FF"}}>3000 сом</h1>
                            <button onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                        </div>
                    </div>
                </Card.Grid>
                <Card.Grid className={styles.card} style={gridStyle}>
                    <div>
                        <Zajita/>
                        <h2 style={{margin:"19px 0", color:"#0075FF"}}>Коммерческий (Индивидуальный)</h2>
                        <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>По договору</p>
                        <div style={{margin:"127px 0"}}>
                            <button onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                        </div>
                    </div>
                </Card.Grid>
            </div>
        </div>
        </div>
    );
};

export default ServicesSection;