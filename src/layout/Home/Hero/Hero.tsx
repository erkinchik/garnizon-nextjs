import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import guard from "../../../../assets/media/guard.jpg";
import gBanner from "../../../../assets/media/gZoneBanner.png";
// import Link from 'next/Link';
import { guardButtons, supportButtons } from "../../../../utils/heroNavMenu";
import cn from "classnames";

import styles from "./Hero.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";


const Hero = ({ banner }: any) => {
  const router = useRouter();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isVisibleGuard, setIsVisibleGuard] = useState(false);
  const [isVisibleSupport, setIsVisibleSupport] = useState(false);
  const [enterLink, setEnterLink] = useState({
    isMouseEnter: false,
    image: guard,
    text: "",
  });
  useEffect(() => {

    setIsVisibleGuard(false);
    setIsVisibleSupport(false);
  }, [router.asPath, router]);


  const openSupportBlock = () => setIsVisibleSupport(true);
  const closeSupportBlock = () => setIsVisibleSupport(false);

  const openGuardBlock = () => setIsVisibleGuard(true);
  const closeGuardBlock = () => setIsVisibleGuard(false);

  const handleEnterLink = ({
    value,
    image,
    text = "",
  }: {
    value: boolean;
    image: StaticImageData;
    text?: string;
  }) => setEnterLink({ isMouseEnter: value, image, text });

  return (
    <div
      className={cn(styles.hero, {
        [styles.heroOpenedProductsArea]: isVisibleGuard,
        [styles.heroOpenedSupportArea]: isVisibleSupport,
      })}
    >
      <div className={styles.heroMobile} style={{ zIndex: 6 }}>
        <div className={styles.heroMobileBlock} onClick={openGuardBlock}>
          <div
            className={cn(
              styles.heroMobilePerson,
              styles.heroMobilePersonProducts
            )}
          />
          <div className={styles.heroMobileTitle}>
            ПОЛУЧИТЬ <br />
            <span>ЗАЩИТУ</span>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url("http:${banner}")` }}
          className={cn(styles.heroSlideEvent, {
            [styles.heroSlideEventHidden]: isVisibleGuard || isVisibleSupport,
          })}
        />
        <div className={styles.heroMobileBlock} onClick={openSupportBlock}>
          <div
            className={cn(
              styles.heroMobilePerson,
              styles.heroMobilePersonSupport
            )}
          />
          <div className={styles.heroMobileTitle}>
            <span>ПОДДЕРЖКА</span> <br />
            КЛИЕНТОВ
          </div>
        </div>
      </div>
      <div
        className={cn(styles.heroArea, styles.heroAreaProducts, {
          [styles.heroAreaProductsVisible]: isVisibleGuard,
        })}
      >
        <>
          <div
            className={cn(styles.heroLinkPreview, {
              [styles.heroLinkPreviewVisible]:
                isVisibleSupport && enterLink.isMouseEnter,
            })}
          >
            <Image src={enterLink.image} />
          </div>
          {isVisibleGuard || isVisibleSupport ? null : (
            <div className={styles.heroAreaTitle} onClick={openGuardBlock}>
              ПОЛУЧИТЬ ЗАЩИТУ
            </div>
          )}
        </>
        <div
          className={cn(styles.heroAreaContent, {
            [styles.heroAreaContentVisible]: isVisibleGuard,
          })}
        >
          <div className={styles.heroAreaContentInner}>
            <a
              href="tel:+996 (703) 701000"
              className={cn(
                styles.btn,
                styles.heroAreaLink,
                styles.heroAreaLinkVisible,
                styles.addpulseBtn
              )}
            >
              Заказать звонок
            </a>
            <div className={styles.heroAreaNav}>
              {guardButtons.map(
                (b: {
                  title: string;
                  href: string;
                  image: StaticImageData;
                  text: string;
                }): JSX.Element => {
                  return (
                    <Link key={b.title} href={`#${b.href}`} scroll={false} passHref>
                      <a
                        className={cn(styles.heroAreaLink, {
                          [styles.heroAreaLinkVisible]: isVisibleGuard,
                        })}
                        onMouseEnter={() =>
                          handleEnterLink({
                            value: true,
                            image: b.image,
                            text: b.text,
                          })
                        }
                        onMouseLeave={() =>
                          handleEnterLink({
                            value: false,
                            image: b.image,
                          })
                        }
                      >
                        <div className={styles.heroAreaIcon} />
                        {b.title}
                      </a>
                    </Link>
                  );
                }
              )}
              <button
                className={`${styles.heroAreaLink} ${
                  isVisibleGuard && styles.heroAreaLinkVisible
                }`}
                onClick={closeGuardBlock}
              >
                <div className={styles.heroAreaIcon} />
                Назад
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(styles.heroArea, styles.heroAreaSupport, {
          [styles.heroAreaSupportVisible]: isVisibleSupport,
        })}
      >
        <>
          <div
            className={cn(styles.heroLinkPreview, {
              [styles.heroLinkPreviewVisible]:
                isVisibleGuard && enterLink.isMouseEnter,
            })}
          >
            <Image src={enterLink.image} />
          </div>
          {isVisibleSupport || isVisibleGuard ? null : (
            <div
              onClick={openSupportBlock}
              className={cn(styles.heroAreaTitle, {
                [styles.addpulseBtn]: isMouseOver,
              })}
            >
              ПОДДЕРЖКА КЛИЕНТОВ
            </div>
          )}
        </>
        <div
          className={cn(styles.heroAreaContent, {
            [styles.heroAreaContentVisible]: isVisibleSupport,
          })}
        >
          <div className={styles.heroAreaContentInner}>
            <div className={styles.heroAreaNav}>
              {supportButtons.map(
                (b: {
                  title: string;
                  href: string;
                  image: StaticImageData;
                }): JSX.Element => {
                  return (
                    <a
                      key={b.title}
                      className={cn(styles.heroAreaLink, {
                        [styles.heroAreaLinkVisible]: isVisibleSupport,
                      })}
                      href={b.href}
                      onMouseEnter={() =>
                        handleEnterLink({
                          value: true,
                          image: b.image,
                        })
                      }
                      onMouseLeave={() =>
                        handleEnterLink({
                          value: false,
                          image: b.image,
                        })
                      }
                    >
                      <div className={styles.heroAreaIcon} />
                      {b.title}
                    </a>
                  );
                }
              )}
              <button
                className={cn(styles.heroAreaLink, {
                  [styles.heroAreaLinkVisible]: isVisibleSupport,
                })}
                onClick={closeSupportBlock}
                data-text="Свернуть меню"
              >
                <div className={styles.heroAreaIcon} />
                Назад
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroSlidesWrap}>
        {enterLink.text && (
          <div
            className={cn(styles.heroAreaText, {
              [styles.heroAreaTextVisible]:
                enterLink.isMouseEnter || (isVisibleGuard && isVisibleGuard),
            })}
          >
            {enterLink.text}
          </div>
        )}
        <div
          style={{ backgroundImage: `url("http:${banner}")` }}
          className={cn(styles.heroSlideEvent, {
            [styles.heroSlideEventHidden]: isVisibleGuard || isVisibleSupport,
          })}
          data-target="#popup-new-app"
          data-toggle="modal"
        />
        <div
          className={cn(styles.heroSlidesOverlay, {
            [styles.heroSlidesOverlayVisible]:
              isVisibleSupport || isVisibleGuard,
          })}
        />
      </div>
      <div
        className={cn(styles.heroOverlay, {
          [styles.heroOverlayVisibleProds]: isVisibleGuard,
          [styles.heroOverlayVisible]: isVisibleGuard || isVisibleSupport,
        })}
      />
    </div>
  );
};

export default Hero;
