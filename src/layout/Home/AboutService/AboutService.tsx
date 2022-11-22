import React, { useEffect } from "react";
import { Service } from "../../../components";
import { IService, services } from "../../../../utils/serviceCards";
import styles from "./AboutService.module.scss";
import { useRouter } from "next/router";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

export const AboutService = () => {
  return (
    <section className={styles.services}>
      {services.map((s: IService): JSX.Element => {
        // return <Service key={s.id} service={s} />;
        return <ServiceCard key={s.id} service={s}/>;
      })}
    </section>
  );
};
