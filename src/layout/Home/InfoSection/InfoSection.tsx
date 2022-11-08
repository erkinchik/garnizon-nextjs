import React, { FC, useEffect, useState } from "react";

import classes from "../../../../styles/Home.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface InfoSectionProps {
  text: Document | string;
}
const InfoSection: FC<InfoSectionProps> = ({ text }) => {
  return (
    <section className={classes.mainText}>
      <div className={classes.mainTextContent}>
        {"string" === typeof text ? text : documentToReactComponents(text!)}
      </div>
    </section>
  );
};

export default InfoSection;
