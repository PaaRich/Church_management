import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import complaintReducer from "./features/complaint/complaintSlice";
import ministryReducer from "./features/ministry/ministrySlice"
import mustardReducer from "./features/mustard/mustardSlice"

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    complaint: complaintReducer,
    ministry: ministryReducer,
    mustard:mustardReducer
  },
});
