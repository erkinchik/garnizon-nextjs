import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { toast } from 'react-toastify';
import { AuthState, loginData, registerData } from "../../shared/types/interface";
import { notification } from "antd";
import { token } from "../../utils/index";
import { getCookie } from "cookies-next/lib";
import { user } from "../../services/cookies";

const URL = "http://176.126.164.61:8080";

const initialState = {
  error: "",
  token: getCookie("accessToken") || null,
  isAuth: getCookie("accessToken") || false,
  isRegister: false,
  loading: false,
  user: JSON.parse(<string>getCookie("user") || "{}") || {},
} as AuthState;

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async function (user: loginData, { rejectWithValue }) {
    try {
      const response = await axios.post(`${URL}/auth/login`, user);

      return response.data.accessToken;
    } catch (error) {
      const err = error as any;
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const fetchUserInfo = createAsyncThunk(
  "auth/fetchUserInfo",
  async function (token: string, { rejectWithValue }) {
    try {
      const login = await axios.get(`${URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return login.data;
    } catch (error) {
      const err = error as any;
      return rejectWithValue(err.response.data.message);
    }
  }
);
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async function (user: registerData, { rejectWithValue }) {
    try {
      const { data } = await axios.post(`${URL}/auth/register`, user);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      notification.error({
        message: action.payload as string,
        placement: "topLeft",
      });
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.isAuth = true;
      notification.success({
        message: "Авторизация прошла успешно",
        placement: "topLeft",
      });
    });
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuth = true;
    });

    builder.addCase(fetchRegister.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.isRegister = true;
      state.user = action.payload;
      notification.success({
        message: "Регистрация прошла успешно",
        placement: "topLeft",
      });
    });
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.loading = false;
      state.isRegister = false;
      // toast.error(`${action.payload}`);
    });

    // [fetchLogin.pending]: (state) => {
    //     state.loading = true;
    // },
    // [fetchLogin.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // },
    // [fetchLogin.fulfilled]: (state, action) => {
    //     if (action.payload.role === "ADMIN") {
    //         state.user = action.payload;
    //         state.error = "";
    //         state.isAuth = true;
    //     } else {
    //         state.error = "Not Admin";
    //     }
    //     state.loading = false;
    // },
    //
    // [getArchive.pending]: (state) => {
    //     state.loading = true;
    // },
    // [getArchive.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // },
    // [getArchive.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.error = "";
    //     state.archiveList = action.payload;
    // },
    //
    // [paySubscription.pending]: (state, action) => {
    //     state.loading = true;
    // },
    // [paySubscription.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // },
    // [paySubscription.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     // state.guardList.data = [action.payload, ...state.guardList.data];
    // },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
