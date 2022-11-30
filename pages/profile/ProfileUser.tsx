import { useDispatch } from "react-redux";
import { AppDispatch } from "store/index";
import { useAppSelector } from "hooks/useAppSelector";
import React, { useEffect } from "react";
import { getHistory } from "store/slices/userSlice";
import classes from "./profilePage.module.scss";
import Image from "next/image";
import profile from "../../src/assets/media/profile.png";
import Link from "next/link";
import { ItemType } from "shared/types/type";
import { HistoryCard } from "components/ui";
import { Pagination } from "antd";
const ProfileUser = () => {
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
      <div className={classes.profile}>
        <div className={`${classes.profileInner} ${classes.container}`}>
          <section className={classes.profileHeader}>
            <div className={classes.profilePageInfo}>
              <div className={classes.profileImage}>
                <Image src={profile} alt={"profile"} />
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
                {user?.purchases?.length ? (
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
          <div className={classes.linia}></div>
          {/*<section className={classes.historySection}>*/}
          {/*    <div className={classes.historyBlock}>*/}
          {/*        {history?.data.length ? (*/}
          {/*            history.data.map((item: ItemType) => {*/}
          {/*                return <HistoryCard key={item.id} item={item} />;*/}
          {/*            })*/}
          {/*        ) : (*/}
          {/*            <h3 style={{ textAlign: "center", marginBottom: "50px" }}>*/}
          {/*                Нет вызовов*/}
          {/*            </h3>*/}
          {/*        )}*/}
          {/*    </div>*/}
          {/*    <div style={{position:"relative", top:130}}>*/}
          {/*        <Pagination />*/}
          {/*    </div>*/}
          {/*</section>*/}
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
