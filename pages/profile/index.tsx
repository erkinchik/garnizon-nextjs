import React, { useEffect } from "react";
import styles from "./profilePage.module.scss";
import { getHistory } from "store/slices/userSlice";
import { useAppSelector } from "hooks/useAppSelector";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { AppDispatch } from "store/index";
import { withLayout } from "components/hocs/withLayout";
import { ProfileTabs } from "components/shared";
import {ProfileUser} from "./ProfileUser";
import History from "./History";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAppSelector((state) => state.auth);
  const { history } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(getHistory(user!["id"]));
    }
  }, [dispatch, user]);
  const plan = true;

  const onChange = () => {
    console.log("hello");
  };

  return (
    <>
      <Head>
        <title>Мой Профиль</title>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.card}></div>

          <ProfileTabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
              {
                label: `Профиль`,
                key: "1",
                children: <ProfileUser/>,
              },
              {
                label: `История вызовов`,
                key: "2",
                children: <History/>,
              },
            ]}

          />
        </div>
      </div>


    </>
  );
};

export default withLayout(Profile);
