import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instagram: "",
  whatsApp: "",
  phone: "",
  telegram: "",
};

const linksSlice = createSlice({
  name: "linksSlice",
  initialState,
  reducers: {
    setLinks(state, action) {
      state.instagram = action.payload.fields.instagram;
      state.whatsApp = action.payload.fields.whatsApp;
      state.phone = action.payload.fields.phone;
      state.telegram = action.payload.fields.telegram;
    },
  },
});

export const { setLinks } = linksSlice.actions;

export default linksSlice.reducer;
