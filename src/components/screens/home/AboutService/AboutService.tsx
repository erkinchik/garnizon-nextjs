import React from "react";
import styles from "./AboutService.module.scss";
import ServiceCard from "../../../shared/ServiceCard/ServiceCard";
import {ProfileTabs} from "components/shared";
import {
    ComponentsAboutServiceFore, ComponentsAboutServiceOne,
    ComponentsAboutServiceTree,
    ComponentsAboutServiceTue
} from "./ComponentsAboutService/ComponentsAboutService";
import {
    ComponentsAboutServiceFive
} from "components/screens/home/AboutService/ComponentsAboutService/ComponentsAboutService";
import {IService, services} from "../../../../data/serviceCards.data";

 const AboutService = () => {
  return (
      <>
    <section className={styles.wrapper}>
        <h3 style={{textAlign:"center", margin:'100px 0 50px', color:'#0075FF', fontWeight:800}}>Наши услуги</h3>
      <div className={styles.services}>
        {services.map((s: IService): JSX.Element => {
          return <ServiceCard key={s.id} service={s} />;
        })}
      </div>
    </section>
      <div className={styles.main}>
          <div className={styles.profiletab}>
              <h1 style={{textAlign:"center", margin:'100px 0 50px', color:'#0075FF', fontWeight:800}}>Наши услуги</h1>

              <ProfileTabs
                            className={styles.dd}
                            defaultActiveKey="1"
                            tabPosition='left'
                            items={[
                                {
                                    label: `Физическая охрана`,
                                    key: "1",
                                    children: <ComponentsAboutServiceOne/>,
                                },
                                {
                                    label: `Пультовая охрана`,
                                    key: "2",
                                    children: <ComponentsAboutServiceTue/>,
                                },
                                {
                                    label: `Личная охрана`,
                                    key: "3",
                                    children: <ComponentsAboutServiceTree/>,
                                },
                                {
                                    label: `Охрана и сопровождение грузов`,
                                    key: "4",
                                    children: <ComponentsAboutServiceFore/>,
                                },
                                {
                                    label: `Охрана недвижимости`,
                                    key: "5",
                                    children: <ComponentsAboutServiceFive/>,
                                },
                            ]}
                        />

          </div>
      </div>
      </>
  );
};
export default AboutService