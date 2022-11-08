import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import classes from "../../styles/Home.module.scss";
import client from "../../contentful/index";
import {
  IHome,
  IHomeFields,
  ILinks,
  IPlans,
  IServices,
  IServicesFields,
} from "../types/contentful";
import React, { useEffect } from "react";
import {
  FeedFormSection,
  GbrSection,
  Hero,
  InfoSection,
  MainWorkSection,
  PlansSection,
  ServicesSection,
} from "../layout";
import { useDispatch } from "react-redux";
import { setLinks } from "../store/slices/linksSlice";

interface HomeProps {
  home: IHome[];
  services: IServices[];
  plans: IPlans[];
  links: ILinks[];
}
const Home: NextPage<HomeProps> = ({ home, services, plans, links }) => {
  const dispatch = useDispatch();
  const [gbrSection2, gbrSection, mainWorkSection, heroSection] = home;
  useEffect(() => {
    dispatch(setLinks(links[0]));
  }, [dispatch, links]);
  return (
    <div>
      <Head>
        <title>Гарнизон</title>
      </Head>

      <main className={classes.home}>
        <Hero banner={heroSection.fields.banner?.fields.file.url} />
        <InfoSection text={heroSection.fields.infoText || ""} />
        <ServicesSection services={services} />
        <PlansSection plans={plans} />
        <MainWorkSection
          text={mainWorkSection.fields.infoText!}
          banner={mainWorkSection.fields.banner?.fields.file.url!}
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
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const home = await client.getEntries<IHomeFields>({
    content_type: "home",
  });
  const services = await client.getEntries<IServicesFields>({
    content_type: "services",
    // select: 'fields.title,fields.slug,fields.photo',
  });
  const plans = await client.getEntries<IServicesFields>({
    content_type: "Plans",
    // select: 'fields.title,fields.slug,fields.photo',
  });

  const links = await client.getEntries<IServicesFields>({
    content_type: "links",
  });
  return {
    props: {
      home: home.items,
      services: services.items,
      plans: plans.items,
      links: links.items,
    },
    revalidate: 3600,
  };
};
