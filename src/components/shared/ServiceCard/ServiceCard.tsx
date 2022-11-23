import React, { useCallback, useEffect, useState } from "react";
import styles from "./ServiceCard.module.scss";
import { IService } from "../../../data/serviceCards.data";
import { useRouter } from "next/router";
import { HOME_PAGE } from "../../../routes/path";
import cn from "classnames";

const ServiceCard = ({ service }: { service: IService }) => {
  const router = useRouter();
  const [isCardActive, setIsCardActive] = useState(false);
  useEffect(() => {
    if (router.asPath.split("#")[1] === service.id) {
      router.push(HOME_PAGE);
    }
  }, []);
  useEffect(() => {
    trigger();
  }, [router.asPath, router]);

  const trigger = useCallback(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (router.asPath.split("#")[1] === service.id) {
      setIsCardActive(true);
      timeout = setTimeout(() => {
        setIsCardActive(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [router.asPath, router]);
  return (
    <div className={styles.cardContainer} id={service.id}>
      <div
        className={cn(styles.card, {
          [styles.cardActive]: isCardActive,
        })}
      >
        <a href={styles.hotTub}>
          <div className={styles.cardDisplay}>
            {/*<i className={styles.materialIcons}></i>*/}
            <h2>{service.title}</h2>
          </div>
          <div className={styles.cardHover}>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <p className={styles.link}>Подробнее</p>
          </div>
        </a>
        <div className={styles.cardBorder} />
      </div>
    </div>
  );
};

export default ServiceCard;
