import { getCookie, getCookies } from "cookies-next/lib";

export const allCookies = ["accessToken"];
export const {user} = getCookies();
