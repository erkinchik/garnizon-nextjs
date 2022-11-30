import React, { FC, useEffect, useState } from "react";
import Link from "next/link";

import classes from "./Header.module.scss";

import ProfileIcon from "../../../assets/icons/personal.svg";
import TelegramIcon from "../../../assets/icons/telegram.svg";
import WhatsAppIcon from "../../../assets/icons/whatsappIcon.svg";
import LogoutIcon from "../../../assets/icons/logout.svg";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import {
  HOME_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE,
  REGISTRATION_PAGE,
} from "../../../routes/path";
import { useRouter } from "next/router";

import { logout } from "../../../store/slices/authSlice";
import { useCookies } from "react-cookie";

import { allCookies } from "../../../services/cookies";

const linksStructure = [
  {
    title: "Telegram",
    className: classes.telegramLink,
    icon: <TelegramIcon />,
    path: "",
  },
  {
    title: "WhatsApp",
    className: classes.whatsAppLink,
    icon: <WhatsAppIcon />,
    path: "",
  },
];
const profilePage = [REGISTRATION_PAGE, LOGIN_PAGE];

export const Header: FC = () => {
  const { token } = useAppSelector((s) => s.auth);
  const router = useRouter();
  const { telegram, phone, whatsApp } = useAppSelector((state) => state.links);
  const dispatch = useAppDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(allCookies);
  const logOut = () => {
    router.push(HOME_PAGE);
    dispatch(logout());
    removeCookie("accessToken", { path: "/" });
    removeCookie("user", { path: "/" });
  };

  return (
    <header className={classes.siteHeader}>
      <div className={classes.topHeader}>
        <div className={classes.homeLinkWrapper}>
          <Link href="/">
            <a className={classes.homeLink} />
          </Link>
          <h2>Гарнизон</h2>
        </div>
        <div className={classes.linkContainer}>
          <div className={classes.linkItem}
          style={{position:"absolute", right:350, top:37}}>
            <span className={classes.link}>
              <a className={classes.link} href={`tel:${phone}`}>
                {phone}
              </a>
            </span>
          </div>

        </div>
        <ul className={`${classes.linkContainer} ${classes.icons}`}>
          <div>
            <a
                data-tooltip={"Telegram"}
              href={telegram}
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon  />
            </a>
          </div>
          <li
            data-tooltip={"WhatsApp"}
          >
            <a
              href={whatsApp}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon />
            </a>
          </li>
          {!profilePage.includes(router.pathname) && (
            <li
              data-tooltip={"Личный Кабинет"}
            >
              <Link
                href={token ? PROFILE_PAGE : LOGIN_PAGE}
                passHref
                // href={LOGIN_PAGE}
              >
                <a
                  className={`${classes.link} ${classes.icon} ${classes.profile}`}
                >
                  <ProfileIcon />
                </a>
              </Link>
            </li>
          )}
          {token && (
            <li
              data-tooltip={"Выйти"}
              onClick={logOut}
            >
              <Link href={HOME_PAGE} passHref>
                <a
                  className={`${classes.link} ${classes.icon} ${classes.profile}`}
                >
                  <LogoutIcon />
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};


