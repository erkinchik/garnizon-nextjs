import React from "react";

import classes from "./Footer.module.scss";

import TelegramIcon from "../../../assets/icons/social/telegram.ad6bc4b095e2.svg";
import WhatsAppIcon from "../../../assets/icons/social/whatsapp.8a549938e510.svg";
import InstagramIcon from "../../../assets/icons/social/instagram.08c3585e3d7d.svg";
import { url } from "inspector";
import { useAppSelector } from "../../../hooks/useAppSelector";

export const Footer = () => {
  const { instagram, telegram, phone, whatsApp } = useAppSelector(
    (state) => state.links
  );
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <div className={classes.topBlockWrapper}>
          <div className={classes.linkContainer}>
            <div className={classes.contactsBlock}>
              <div className={classes.phoneEmail}>
                <span className={classes.callPhone1}>
                  <a href={`tel:${phone}`}>+996 (703) 701000</a>
                </span>
              </div>
              <div className={classes.socialLinks}>
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
              <div className={classes.appLinks}>
                <a
                  className={`${classes.link} ${classes.apple}`}
                  data-ga-category="btn_ios"
                  data-ga-type="footer"
                  href="#"
                  rel="nofollow"
                  target="_blank"
                />
                <a
                  className={`${classes.link} ${classes.google}`}
                  data-ga-category="btn_android"
                  data-ga-type="footer"
                  href="https://play.google.com/store/apps/details?id=com.tariel.alarmclientapp"
                  rel="noopener noreferrer"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.bottomBlockWrapper}>
          <div className={classes.textContainer}>
            <div className={classes.text}>© 2022 Гарнизон</div>
            <div className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto dolorem facilis nesciunt numquam praesentium. Animi
              consectetur eaque, explicabo harum illo laudantium libero,
              necessitatibus, nisi omnis quas quisquam saepe sequi vel veniam
              voluptates. Adipisci aliquam aspernatur assumenda atque doloremque
              doloribus ea earum eligendi facere fugit iure maxime molestias
              nemo nulla qui, quibusdam quidem repudiandae similique, tempora
              tempore temporibus unde voluptate voluptatibus.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

