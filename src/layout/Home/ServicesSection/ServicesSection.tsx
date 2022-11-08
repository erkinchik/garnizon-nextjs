import React, { FC } from "react";

import classes from "./Services.module.scss";
import { IServices, IServicesFields } from "../../../types/contentful";
interface ServicesSectionProps {
  services: Array<IServices>;
}
const ServicesSection: FC<ServicesSectionProps> = ({ services }) => {
  const [one, two, three, four, five, six] = services;
  return (
    <div>
      <section className={classes.services}>
        <a
          style={{
            backgroundImage: `url("http:${one.fields.photo.fields.file.url}")`,
          }}
          className={`${classes.servicesItem} ${classes.servicesItemTriple}`}
          href="#"
        >
          <div className={classes.servicesItemTitle}>{one.fields.title}</div>
        </a>
        <a
          style={{
            backgroundImage: `url("http:${two.fields.photo.fields.file.url}")`,
          }}
          className={`${classes.servicesItem} ${classes.servicesItemTriple}`}
          href="#"
        >
          <div className={classes.servicesItemTitle}>{two.fields.title}</div>
        </a>
        <a
          style={{
            backgroundImage: `url("http:${three.fields.photo.fields.file.url}")`,
          }}
          className={`${classes.servicesItem} ${classes.servicesItemTriple}`}
          href="#"
        >
          <div className={classes.servicesItemTitle}>{three.fields.title}</div>
        </a>
      </section>
      <section className={classes.services}>
        <a
          style={{
            backgroundImage: `url("http:${four.fields.photo.fields.file.url}")`,
          }}
          className={`${classes.servicesItem} ${classes.servicesItemDouble}`}
          href="#"
        >
          <div>
            <div className={classes.servicesItemTitle}>{four.fields.title}</div>
          </div>
        </a>
        <a
          style={{
            backgroundImage: `url("http:${five.fields.photo.fields.file.url}")`,
          }}
          className={`${classes.servicesItem} ${classes.servicesItemDouble}`}
          href="#"
        >
          <div>
            <div className={classes.servicesItemTitle}>{five.fields.title}</div>
          </div>
        </a>
      </section>
      <section className={classes.services}>
        <a
          style={{
            backgroundImage: `url("http:${six.fields.photo.fields.file.url}")`,
          }}
          className={`${classes.servicesItem} ${classes.servicesItemSolo}`}
          href="#"
          // target="_blank"
        >
          <div>
            <div className={classes.servicesItemTitle}>{six.fields.title}</div>
          </div>
        </a>
      </section>
    </div>
  );
};

export default ServicesSection;
