import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token") || null;
const URL = "https://176.126.164.61:8080/api"

type Loading = "idle" | "pending" | "succeeded" | "failed";
interface AuthState {
    error: string | unknown;
    isAuth: string | boolean;
    loading: Loading;
    user: any;
}
const initialState = {
    error: "",
    isAuth: token || false,
    loading: "idle",
    user: {},
} as AuthState;

export const longTermPurchase = createAsyncThunk(
    "auth/longTermPurchase",
    async function (purchaseType, { rejectWithValue }) {
        try {
            // const token = await getToken();

            const { data } = await axios.post(
                `${URL}/purchase/subscription/${purchaseType}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // Toast.show({
            //     type: "success",
            //     text1: `Подписка на ${
            //         purchaseType === "month"
            //             ? "месяц"
            //             : purchaseType === "three_month"
            //             ? "три месяца"
            //             : purchaseType === "six_month"
            //                 ? "шесть месяцев"
            //                 : "год"
            //     } оформлена!`,
            // });
            return data;
        } catch (error) {
            const err = error as any
            if (err.response.data.message === "Not enough money") {
                // Toast.show({
                //     type: "error",
                //     text1: "Недостаточно средств на балансе!",
                //     text2: "Просьба, пополнить баланс",
                // });
            }
            return rejectWithValue(err.response.data.message);
        }
    }
);



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem("token");
            state.isAuth = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(longTermPurchase.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(longTermPurchase.rejected, (state, action) => {
            state.loading = "failed";
            state.error = action.payload;
        });
        builder.addCase(longTermPurchase.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = "succeeded";
            state.isAuth = true;
        });


    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
