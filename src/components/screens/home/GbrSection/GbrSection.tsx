import React, { FC } from "react";

import classes from "./GbrSection.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

interface GbrSectionProps {
  title: string;
  text: Document | string;
  banner: string;
  title2: string;
  text2: Document | string;
  banner2: string;
}
const renderOptions = {
  renderText: (text: string) => {
    return text
      .split("\n")
      .reduce((children: any, textSegment: any, index: number) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
  },
};

const GbrSection: FC<GbrSectionProps> = ({
  title,
  text,
  banner,
  text2,
  title2,
  banner2,
}) => {
  return (
    <section className={classes.container}>
      <h2 className={`${classes.newTitle} ${classes.mainGbrTitle}`}>
        {title || "СЛУЖБА РЕАГИРОВАНИЯ ГАРНИЗОН ЭТО:"}
      </h2>
      <div className={classes.mainGbrBlock}>
        <div className={classes.mainGbrBlockImageWrapper}>
          <div
            style={{ backgroundImage: `url("http:${banner}")` }}
            className={`${classes.mainGbrBlockImage} ${classes.mainGbrBlockImage1}`}
          />
        </div>
        <div className={classes.mainGbrBlockText}>
          {"string" === typeof text
            ? text
            : documentToReactComponents(text!, renderOptions)}
        </div>
      </div>
      <h2 className={`${classes.newTitle} ${classes.mainGbrTitle}`}>
        {title || "СЛУЖБА РЕАГИРОВАНИЯ ГАРНИЗОН ЭТО:"}
      </h2>
      <div className={classes.mainGbrBlock}>
        <div className={classes.mainGbrBlockImageWrapper}>
          <div
            style={{ backgroundImage: `url("http:${banner2}")` }}
            className={`${classes.mainGbrBlockImage} ${classes.mainGbrBlockImage2}`}
          />
        </div>
        <div className={classes.mainGbrBlockText}>
          {"string" === typeof text2
            ? text2
            : documentToReactComponents(text2!, renderOptions)}
        </div>
      </div>
    </section>
  );
};

export default GbrSection;
