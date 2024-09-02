import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import attendanceServices from "./attendanceServices";

const initialState = {
  attendanceLoading: false,
  attendanceError: false,
  attendanceSuccess: false,
  attendanceRecords: [],
};

//mark attendance
export const markAttendance = createAsyncThunk(
  "attendance/markAttendance",
  async (attendanceData, thunkAPI) => {
    try {
      return await attendanceServices.markAttendance(attendanceData);
    } catch (error) {
      // console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//GET attendance records
export const getAttendanceRecords = createAsyncThunk(
  "attendance/getAttendanceRecords",
  async (query, thunkAPI) => {
    try {
      return await attendanceServices.getAttendanceRecords(query);
    } catch (error) {
      // console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    RESET_ATTENDANCE_STATES(state) {
      (state.attendanceLoading = false),
        (state.attendanceError = false),
        (state.attendanceSuccess = false);
    },
  },
  extraReducers(builder) {
    builder
      //adding new attendance
      .addCase(markAttendance.pending, (state, action) => {
        state.attendanceLoading = true;
      })
      .addCase(markAttendance.fulfilled, (state, action) => {
        state.attendanceLoading = false;
        state.attendanceSuccess = true;
        state.attendanceError = false;
        toast.success(action.payload.message);
      })
      .addCase(markAttendance.rejected, (state, action) => {
        state.attendanceLoading = false;
        state.attendanceSuccess = false;
        state.attendanceError = true;
        toast.error(action.payload);
      })

      //GET attendance records
      .addCase(getAttendanceRecords.pending, (state, action) => {
        state.attendanceLoading = true;
      })
      .addCase(getAttendanceRecords.fulfilled, (state, action) => {
        state.attendanceLoading = false;
        state.attendanceSuccess = true;
        state.attendanceError = false;
        state.attendanceRecords = action.payload;
      })
      .addCase(getAttendanceRecords.rejected, (state, action) => {
        state.attendanceLoading = false;
        state.attendanceSuccess = false;
        state.attendanceError = true;
        toast.error(action.payload);
      });
  },
});

export const { RESET_ATTENDANCE_STATES } = attendanceSlice.actions;
export default attendanceSlice.reducer;
