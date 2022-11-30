import React, { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Service.module.scss";

import guard from "../../../assets/media/guard.jpg";

import cn from "classnames";
// import { ScrollableAnchor } from "../../index";
import { IService } from "../../../data/serviceCards.data";
import { useRouter } from "next/router";
import { HOME_PAGE } from "../../../routes/path";

const Service = ({ service }: { service: IService }) => {
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
    <div
      className={cn(styles.card, {
        [styles.cardActive]: isCardActive,
      })}
      id={service.id}
    >
      <h4 className={styles.header}>{service.title}</h4>
      <div className={styles.body}>
        <div className={styles.image}>
          <Image src={guard} placeholder={"blur"} />
        </div>
        <div className={styles.theses}>
          <p className={styles.thesesList}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            deserunt incidunt iste nisi reiciendis repellat temporibus ullam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
