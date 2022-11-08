import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { toast } from 'react-toastify';
import { UserState } from "../../types/interface";

const URL = "http://discoverystudio.xyz:6969"

const initialState = {
    error: false,
    loading: "idle",
    history: null,
} as UserState;

export const getHistory = createAsyncThunk(
    "userSlice/getHistory",
    async function (userId: string, { rejectWithValue }) {
        try {
            const { data } = await axios.get(`${URL}/history/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return data
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHistory.pending, (state) => {
            state.loading = "pending";
        });
        builder.addCase(getHistory.rejected, (state, action) => {
            state.loading = "failed";
            // toast.error(`${action.payload}`);
        });
        builder.addCase(getHistory.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.history = action.payload;
        });
    },
});


export default userSlice.reducer;
