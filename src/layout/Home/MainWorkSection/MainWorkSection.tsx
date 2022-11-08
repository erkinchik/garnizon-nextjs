import React, { FC } from "react";

import classes from "./MainWorkSection.module.scss";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface MainWorkSectionProps {
  text: Document | string;
  banner: string;
}
const MainWorkSection: FC<MainWorkSectionProps> = ({ text, banner }) => {
  return (
    <section className={`${classes.container} ${classes.howWork}`}>
      <div className={classes.howWorkText}>
        {"string" === typeof text ? text : documentToReactComponents(text!)}
      </div>
      <div
        style={{ backgroundImage: `url("http:${banner}")` }}
        className={classes.howWorkImage}
      />
      {/*<h2 className={`${classes.newTitle} ${classes.howWorkTitle}`}>*/}
      {/*  ОСНОВНЫЕ ПРИНЦИПЫ СОВРЕМЕННОЙ ЭКОСИСТЕМЫ БЕЗОПАСНОСТИ*/}
      {/*</h2>*/}
      {/*<p className={classes.howWorkText}>*/}
      {/*  Все процессы, отвечающие за обеспечение мониторинга и реагирования,*/}
      {/*  автоматизированы и соединены в единую бесшовную инфраструктуру. Для*/}
      {/*  пользователя это значит только то, что человек не вмешивается в алгоритм*/}
      {/*  обеспечения безопасности и выполняет администрирующую функцию.*/}
      {/*  <br />*/}
      {/*  <br />*/}
      {/*  Система по средствам защищенной инфраструктуры самостоятельно и*/}
      {/*  автономно обменивается сигналами между объектами, станциями мониторинга*/}
      {/*  и экипажами реагирования. <br />*/}
      {/*  <br />*/}
      {/*  Также в автоматическом режиме происходит расстановка и назначение*/}
      {/*  экипажа в случае тревоги и расчет оптимального маршрута прибытия к*/}
      {/*  объекту. То, что недавно казалось фантастикой, уже реализовано*/}
      {/*  экспертами DELTA.*/}
      {/*</p>*/}
    </section>
  );
};

export default MainWorkSection;
