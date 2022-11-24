import React from "react";
import { Tabs } from "antd";
import { ProfileTabsProps } from "components/shared/ProfileTabs/ProfileTabs.props";

import cn from "classnames";
import styles from "./ProfileTabs.module.scss";

export const ProfileTabs = ({ className, ...props }: ProfileTabsProps) => {
  return (
    <div className={styles.tabContainer}>
      <Tabs className={cn(styles.custom, className)} {...props} />
    </div>
  );
};
