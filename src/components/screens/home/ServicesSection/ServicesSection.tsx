// import React, { FC } from "react";
//
// import classes from "./Services.module.scss";
// import { IServices, IServicesFields } from "../../../../shared/types/contentful";
// interface ServicesSectionProps {
//   services: Array<IServices>;
// }
// const ServicesSection: FC<ServicesSectionProps> = ({ services }) => {
//   const [one, two, three, four, five, six] = services;
//   return (
//     <div>
//       <section className={classes.services}>
//         <a
//           style={{
//             backgroundImage: `url("http:${one.fields.photo.fields.file.url}")`,
//           }}
//           className={`${classes.servicesItem} ${classes.servicesItemTriple}`}
//           href="#"
//         >
//           <div className={classes.servicesItemTitle}>{one.fields.title}</div>
//         </a>
//         <a
//           style={{
//             backgroundImage: `url("http:${two.fields.photo.fields.file.url}")`,
//           }}
//           className={`${classes.servicesItem} ${classes.servicesItemTriple}`}
//           href="#"
//         >
//           <div className={classes.servicesItemTitle}>{two.fields.title}</div>
//         </a>
//         <a
//           style={{
//             backgroundImage: `url("http:${three.fields.photo.fields.file.url}")`,
//           }}
//           className={`${classes.servicesItem} ${classes.servicesItemTriple}`}
//           href="#"
//         >
//           <div className={classes.servicesItemTitle}>{three.fields.title}</div>
//         </a>
//       </section>
//       <section className={classes.services}>
//         <a
//           style={{
//             backgroundImage: `url("http:${four.fields.photo.fields.file.url}")`,
//           }}
//           className={`${classes.servicesItem} ${classes.servicesItemDouble}`}
//           href="#"
//         >
//           <div>
//             <div className={classes.servicesItemTitle}>{four.fields.title}</div>
//           </div>
//         </a>
//         <a
//           style={{
//             backgroundImage: `url("http:${five.fields.photo.fields.file.url}")`,
//           }}
//           className={`${classes.servicesItem} ${classes.servicesItemDouble}`}
//           href="#"
//         >
//           <div>
//             <div className={classes.servicesItemTitle}>{five.fields.title}</div>
//           </div>
//         </a>
//       </section>
//       <section className={classes.services}>
//         <a
//           style={{
//             backgroundImage: `url("http:${six.fields.photo.fields.file.url}")`,
//           }}
//           className={`${classes.servicesItem} ${classes.servicesItemSolo}`}
//           href="#"
//           // target="_blank"
//         >
//           <div>
//             <div className={classes.servicesItemTitle}>{six.fields.title}</div>
//           </div>
//         </a>
//       </section>
//     </div>
//   );
// };
//
// export default ServicesSection;


import React from 'react';
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
    return (
        <div>
            <h1 style={{margin:"50px 0", textAlign:"center",   color:'#0075FF', fontWeight:800}}>Тарифы</h1>

            <div style={{display:"flex", justifyContent:"center", gap:25, flexWrap:"wrap"}}>
                <Card.Grid className={styles.card} style={gridStyle}>
                    <div>
                        <Zajita/>
                        <h2 style={{margin:"40px 0", color:"#0075FF"}}>Стандартный</h2>
                        <p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0", fontWeight:800}}><Check/>1 Вызов</p>
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Unlimited Bandwitch</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Encrypted Connection</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>No Traffic Logs</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Works on All Devices</p>*/}
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
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Unlimited Bandwitch</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Encrypted Connection</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>No Traffic Logs</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Works on All Devices</p>*/}
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
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Unlimited Bandwitch</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Encrypted Connection</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>No Traffic Logs</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Works on All Devices</p>*/}
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
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Unlimited Bandwitch</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Encrypted Connection</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>No Traffic Logs</p>*/}
                        {/*<p style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"30px 0"}}><Check/>Works on All Devices</p>*/}
                        <div style={{margin:"127px 0"}}>
                            {/*<h1 style={{color:"#0075FF"}}>500 сом</h1>*/}
                            <button onClick={isAuth ? openModal : openNotification} className={styles.bth}>Купить</button>
                        </div>
                    </div>
                </Card.Grid>
        </div>
        </div>
    );
};

export default ServicesSection;