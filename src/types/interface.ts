import { Loading } from "./type";

export interface AuthState {
  error: string | unknown;
  token: null;
  isAuth: boolean | string;
  isRegister: boolean;
  loading: boolean;
  user: null | UserModel;
}

export interface Avatar {
  id: string;
  status: number;
  createDate: Date;
  updateDate: Date;
  isDeleted: boolean;
  name: string;
  fileKey: string;
  contentSize: number;
  contentType: string;
  url: string;
}

export interface UserModel {
  id: string;
  status: number;
  createDate: Date;
  updateDate: Date;
  isDeleted: boolean;
  email: string;
  firstName: string;
  lastName: string;
  authType?: any;
  phone?: any;
  role: string;
  agreement: boolean;
  secretWord?: any;
  balance: number;
  avatar: Avatar;
  purchases: any[];
  subscription?: any;
}

export interface UserState {
  error: boolean;
  loading: Loading;
  history: null | any;
}

export interface loginData {
  email: string;
  password: string;
}

export interface registerData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  secretWord: string;
  agreement: boolean;
  phone: string;
}
