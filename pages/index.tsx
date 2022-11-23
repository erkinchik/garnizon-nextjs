import React from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "../contentful/index";
import {
  IHomeFields,
  IServicesFields,
} from "shared/types/contentful";
import { HomeConstructor } from "components/screens";
import { withLayout } from "components/hocs/withLayout";
import { HomeProps } from "../src/shared/props/Home.props";

const Home: NextPage<HomeProps> = ({ home, services, plans, links }) => {
  return (
    <div>
      <Head>
        <title>Гарнизон</title>
      </Head>
      <HomeConstructor
        home={home}
        services={services}
        plans={plans}
        links={links}
      />
    </div>
  );
};

export default withLayout(Home);

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
