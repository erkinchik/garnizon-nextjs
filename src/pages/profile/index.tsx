import React, { useEffect } from "react";

import classes from "./profilePage.module.scss";

import profile from "../../../assets/media/profile.jpg";
import { HistoryCard } from "../../components";
import Image from "next/image";
import { Pagination } from "antd";
// import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../routes/path";

import Link from "next/link";
import { getHistory } from "../../store/slices/userSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { ItemType } from "../../types/type";
import Head from "next/head";
import { AppDispatch } from "../../store";
import { UserModel } from "../../types/interface";
const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useAppSelector((state) => state.auth);
  const { history } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      dispatch(getHistory(user!["id"]));
    }
  }, [dispatch, user]);
  const plan = true;

  return (
    <>
      <Head>
        <title>Мой Профиль</title>
      </Head>
      <div className={classes.profile}>
        <div className={`${classes.profileInner} ${classes.container}`}>
          <section className={classes.profileHeader}>
            <div className={classes.profilePageInfo}>
              <div className={classes.profileImage}>
                <Image src={profile} alt="profile-image" />
              </div>
              <div className={classes.profileText}>
                <h4 className={classes.profileUserInfo}>
                  <span>Имя: {user?.firstName && user?.firstName}</span>
                  <span>Фамилия: {user?.lastName}</span>
                </h4>
                <h4 className={classes.profileContactInfo}>
                  <span>Номер телефона: {user?.phone}</span>
                  <span>Email: {user?.email}</span>
                </h4>
                {user?.purchases.length ? (
                  <h5 className={classes.currentPlan}>
                    Тариф: &nbsp;<span>Стандартный</span>
                  </h5>
                ) : (
                  <h5 className={classes.nonePlan}>
                    Нет подписки. <Link href="/">Оформить!</Link>
                  </h5>
                )}
              </div>
            </div>
            <div className={classes.profileEdit}>
              <button>Редактировать</button>
            </div>
          </section>

          <section className={classes.historySection}>
            <div className={classes.historyBlock}>
              {history?.data.length ? (
                history.data.map((item: ItemType) => {
                  return <HistoryCard key={item.id} item={item} />;
                })
              ) : (
                <h3 style={{ textAlign: "center", marginBottom: "50px" }}>
                  Нет вызовов
                </h3>
              )}
            </div>
            <Pagination />
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;
