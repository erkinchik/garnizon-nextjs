import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import Hero from "./Hero/Hero";
import PlansSection from "./PlansSection/PlansSection";
import AboutService from "./AboutService/AboutService";
import MainWorkSection from "./MainWorkSection/MainWorkSection";
import GbrSection from "./GbrSection/GbrSection";
import FeedFormSection from "./FeedFormSection/FeedFormSection";
import { HomeProps } from "shared/props/Home.props";
import { useDispatch } from "react-redux";
import { setLinks } from "store/slices/linksSlice";
import { IHome } from "shared/types/contentful";

export const HomeConstructor = ({
  home,
  services,
  plans,
  links,
}: HomeProps): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLinks(links[0]));
  }, [dispatch, links]);
  const [gbrSection2, gbrSection, mainWorkSection, heroSection] = home as any;
  return (
    <main className={styles.home}>
      <Hero banner={heroSection.fields.banner?.fields.file.url} />
      {/*<InfoSection text={heroSection.fields.infoText || ""} />*/}
      {/*<ServicesSection services={services} />*/}
      <PlansSection plans={plans} />
      <AboutService />
      <MainWorkSection
        text={mainWorkSection?.fields.infoText!}
        banner={mainWorkSection?.fields.banner?.fields.file.url!}
      />
      <GbrSection
        title={gbrSection.fields.title!}
        text={gbrSection.fields.infoText!}
        banner={gbrSection.fields.banner?.fields.file.url!}
        text2={gbrSection2.fields.infoText!}
        title2={gbrSection2.fields.title!}
        banner2={gbrSection2.fields.banner?.fields.file.url!}
      />
      <FeedFormSection />
    </main>
  );
};
