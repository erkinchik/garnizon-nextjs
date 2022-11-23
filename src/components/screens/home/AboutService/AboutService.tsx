import React, { useEffect } from "react";
import { Service } from "../../../index";
import { IService, services } from "../../../../data/serviceCards.data";
import styles from "./AboutService.module.scss";
import { useRouter } from "next/router";
import ServiceCard from "../../../shared/ServiceCard/ServiceCard";

 const AboutService = () => {
  return (
    <section className={styles.wrapper}>
        <h3>Наши услуги</h3>
      <div className={styles.services}>
        {services.map((s: IService): JSX.Element => {
          return <ServiceCard key={s.id} service={s} />;
        })}
      </div>
    </section>
  );
};
export default AboutService