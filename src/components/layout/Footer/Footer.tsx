import React from "react";

import classes from "./Footer.module.scss";

import TelegramIcon from "../../../assets/icons/social/telegram.ad6bc4b095e2.svg";
import WhatsAppIcon from "../../../assets/icons/social/whatsapp.8a549938e510.svg";
import InstagramIcon from "../../../assets/icons/social/instagram.08c3585e3d7d.svg";
import Apple from "../../../assets/icons/apple.svg";
import Google from "../../../assets/icons/googleplay.svg";

import { useAppSelector } from "../../../hooks/useAppSelector";
import Image from "next/image";

export const Footer = () => {
  const { instagram, telegram, phone, whatsApp } = useAppSelector(
      (state) => state.links
  );
  return (
      <footer className={classes.footer}>
        <div style={{padding:"3%"}}>
          <div >
            <div className={classes.sss}>

              <a
                  data-ga-category="btn_ios"
                   data-ga-type="footer"
                   href="#"
                   rel="nofollow"
                   target="_blank">
                <Apple/>
              </a>
              <a  rel="noreferrer"
                  data-ga-category="btn_android"
                  data-ga-type="footer"
                  href="https://play.google.com/store/apps/details?id=com.tariel.alarmclientapp"
                  target="_blank">
                <Google/>
              </a>
            </div>
          <div className={classes.wrapper}>
            <a style={{color: '#FFFFFF', fontSize:20, }} href={`tel:${phone}`}>+996 (703) 701000</a>

            <div style={{display:"flex", gap:15, alignItems:"center"}} >

              <a
                  className={`${classes.link} ${classes.social} ${classes.whatsApp}`}
                  href={whatsApp}
                  rel="noreferrer"
                  target="_blank"
              >
                <WhatsAppIcon />
              </a>
              <a
                  className={`${classes.link} ${classes.social} ${classes.telegram}`}
                  href={telegram}
                  rel="noreferrer"
                  target="_blank"
              >
                <TelegramIcon />
              </a>
              <a
                  className={`${classes.link} ${classes.social} ${classes.instagram}`}
                  href={instagram}
                  rel="noreferrer"
                  target="_blank"
              >
                <InstagramIcon />
              </a>

            </div>

            </div>

          </div>

          <div className={classes.bottomBlockWrapper}>
            <div className={classes.textContainer}>
              <p style={{color:'#FFFF'}}>© 2022 Гарнизон</p>
              <p style={{color:'#FFFF'}}>
                Имеет опыт работы по организации охраны бизнес и торговых центров,
                офисов, гостиниц, кафе, складов, закрытых жилых комплексов с 20хх года
                и является ведущим в области организации охраны.
                На протяжении … лет обеспечиваем безопасность частных лиц и разнообразных объектов в Кыргызстане.
                Все сотрудники компании — профессионалы, бывшие военные, прошедшие спецподготовку и готовы вступить в бой в любую секунду.
                «Гарнизон» предлагает комплексное решение организации личной безопасности, охраны объектов, сопровождения грузов, ценных вещей и пр.
                Нам доверяют самое ценное, потому что мы ПРОФЕССИОНАЛЫ!
                Позаботьтесь о БЕЗОПАСНОСТИ своего жилья, бизнеса, детей уже сегодня! Широкий спектр оказываемых услуг.
              </p>
            </div>
          </div>
        </div>
      </footer>
  );
};
