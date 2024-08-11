import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import complaintReducer from "./features/complaint/complaintSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    complaint: complaintReducer,
  },
});
