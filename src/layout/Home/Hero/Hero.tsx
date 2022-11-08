import React, { useState } from "react";

import classes from "./Hero.module.scss";

const Hero = ({ banner }: any) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isVisibleGuard, setIsVisibleGuard] = useState(false);
  const [isVisibleSupport, setIsVisibleSupport] = useState(false);

  const openSupportBlock = () => setIsVisibleSupport(true);
  const closeSupportBlock = () => setIsVisibleSupport(false);

  const openGuardBlock = () => setIsVisibleGuard(true);
  const closeGuardBlock = () => setIsVisibleGuard(false);

  return (
    <div
      className={`${classes.hero} ${
        isVisibleSupport && classes.heroOpenedSupportArea
      } ${isVisibleGuard && classes.heroOpenedProductsArea}`}
    >
      <div className={classes.heroMobile} style={{ zIndex: 6 }}>
        <div className={`${classes.heroMobileBlock}`} onClick={openGuardBlock}>
          <div
            className={`${classes.heroMobilePerson} ${classes.heroMobilePersonProducts}`}
          />
          <div className={classes.heroMobileTitle}>
            ПОЛУЧИТЬ <br />
            <span>ЗАЩИТУ</span>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url("http:${banner}")` }}
          className={`${classes.heroSlideEvent} ${
            isVisibleGuard || isVisibleSupport
              ? classes.heroSlideEventHidden
              : ""
          }`}
        />
        <div
          className={`${classes.heroMobileBlock}`}
          onClick={openSupportBlock}
        >
          <div
            className={`${classes.heroMobilePerson} ${classes.heroMobilePersonSupport}`}
          />
          <div className={classes.heroMobileTitle}>
            <span>ПОДДЕРЖКА</span> <br />
            КЛИЕНТОВ
          </div>
        </div>
      </div>
      <div
        className={` ${classes.heroArea} ${classes.heroAreaProducts} ${
          isVisibleGuard && classes.heroAreaProductsVisible
        }`}
      >
        {isVisibleGuard || isVisibleSupport ? null : (
          <div className={classes.heroAreaTitle} onClick={openGuardBlock}>
            ПОЛУЧИТЬ ЗАЩИТУ
          </div>
        )}
        <div
          className={`${classes.heroAreaContent} ${
            isVisibleGuard && classes.heroAreaContentVisible
          }`}
        >
          <div className={classes.heroAreaContentInner}>
            <a
              href="tel:+996 (703) 701000"
              className={`${classes.btn} ${classes.heroAreaLink}  ${classes.heroAreaLinkVisible} ${classes.addpulseBtn}`}
            >
              Заказать звонок
            </a>
            <div className={classes.heroAreaNav}>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Физическая охрана
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Пультовая охрана
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Личная охрана
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Охрана и сопровождение грузов
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Инкасация
              </a>
              <button
                className={`${classes.heroAreaLink} ${
                  isVisibleGuard && classes.heroAreaLinkVisible
                }`}
                onClick={closeGuardBlock}
              >
                <div className={classes.heroAreaIcon} />
                Назад
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.heroArea} ${classes.heroAreaSupport} ${
          isVisibleSupport && classes.heroAreaSupportVisible
        }`}
      >
        {isVisibleSupport || isVisibleGuard ? null : (
          <div
            onClick={openSupportBlock}
            className={`${classes.heroAreaTitle} ${
              isMouseOver ? classes.addpulse : ""
            }`}
          >
            ПОДДЕРЖКА КЛИЕНТОВ
          </div>
        )}
        <div
          className={`${classes.heroAreaContent} ${
            isVisibleSupport && classes.heroAreaContentVisible
          }`}
        >
          <div className={classes.heroAreaContentInner}>
            <div className={classes.heroAreaNav}>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Личный кабинет
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
              >
                <div className={classes.heroAreaIcon} />
                Пополнить баланс
              </a>
              <a
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
                href="#"
              >
                <div className={classes.heroAreaIcon} />
                Скачать приложение
              </a>
              {/*<a*/}
              {/*  className={`${classes.heroAreaLink} ${*/}
              {/*    isVisibleSupport && classes.heroAreaLinkVisible*/}
              {/*  }`}*/}
              {/*  href="#"*/}
              {/*>*/}
              {/*  <div className={classes.heroAreaIcon} />*/}
              {/*  Помощь*/}
              {/*</a>*/}
              {/*<a*/}
              {/*  className={`${classes.heroAreaLink} ${*/}
              {/*    isVisibleSupport && classes.heroAreaLinkVisible*/}
              {/*  }`}*/}
              {/*  href="#"*/}
              {/*>*/}
              {/*  <div className={classes.heroAreaIcon} />*/}
              {/*  Акции для клиентов*/}
              {/*</a>*/}
              <button
                className={`${classes.heroAreaLink} ${
                  isVisibleSupport && classes.heroAreaLinkVisible
                }`}
                onClick={closeSupportBlock}
                data-img="/static/public-v2/images/redesign/backgrounds/rightMenu/back_noBG.c93c654c3c00.png"
                data-text="Свернуть меню"
              >
                <div className={classes.heroAreaIcon} />
                Назад
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.heroSlidesWrap}>
        <div className={classes.heroAreaText} />
        <div
          style={{ backgroundImage: `url("http:${banner}")` }}
          className={`${classes.heroSlideEvent} ${
            isVisibleGuard || isVisibleSupport
              ? classes.heroSlideEventHidden
              : ""
          }`}
          data-target="#popup-new-app"
          data-toggle="modal"
        />
        <div
          className={`${classes.heroSlidesOverlay} ${
            isVisibleSupport || isVisibleGuard
              ? classes.heroSlidesOverlayVisible
              : ""
          }`}
        />
      </div>
      <div
        className={`${classes.heroOverlay} ${
          isVisibleGuard && classes.heroOverlayVisibleProds
        } ${
          isVisibleSupport || isVisibleGuard ? classes.heroOverlayVisible : ""
        }`}
      />
    </div>
  );
};

export default Hero;
