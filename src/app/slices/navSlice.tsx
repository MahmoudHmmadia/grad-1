import { createSlice } from "@reduxjs/toolkit";
interface actionType {
  payload?: any;
  type?: string;
}
const navSlice = createSlice({
  name: "navSlice",
  initialState: false,
  reducers: {
    toggleLinks: (state?, action?: actionType) => {
      return !state;
    },
  },
});
export default navSlice.reducer;
export const { toggleLinks } = navSlice.actions;
