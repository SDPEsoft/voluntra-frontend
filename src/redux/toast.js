import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  show: false,
  status: "success",
  variant: "success",
  message: "Successfully Signed In",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    updateToast: (state, action) => {
      state.show = action.payload.show || state.show;
      state.status = action.payload.status || state.status;
      state.variant = action.payload.variant || state.variant;
      state.message = action.payload.message || state.message;
    },
  },
});

export const { updateToast } = toastSlice.actions;

export default toastSlice.reducer;
