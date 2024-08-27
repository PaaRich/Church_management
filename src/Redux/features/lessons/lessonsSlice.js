import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import lessonsServices from "./lessonsServices";

const initialState = {
  lesson_error: false,
  lesson_success: false,
  lesson_loading: false,
  allLessons: [],
  lesson: null,
};

//add lesson
export const addLesson = createAsyncThunk(
  "lesson/addLesson",
  async (lessonData, thunkAPI) => {
    try {
      return await lessonsServices.addLesson(lessonData);
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

//get all lessons
export const getAllLessons = createAsyncThunk(
  "lesson/getAllLessons",
  async (_, thunkAPI) => {
    try {
      return await lessonsServices.getAllLessons();
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

export const lessonsSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {
    RESET_LESSONS(state) {
      state.lesson_error = false;
      state.lesson_success = false;
      state.lesson_loading = false;
    },
  },
  extraReducers(builder) {
    builder
      //adding new lessons
      .addCase(addLesson.pending, (state, action) => {
        state.lesson_loading = true;
      })
      .addCase(addLesson.fulfilled, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = true;
        state.lesson_error = false;
        toast.success("lesson added successfully");
      })
      .addCase(addLesson.rejected, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = false;
        state.lesson_error = true;
        toast.error(action.payload);
      })

      //get all lessons
      .addCase(getAllLessons.pending, (state, action) => {
        state.lesson_loading = true;
      })
      .addCase(getAllLessons.fulfilled, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = true;
        state.lesson_error = false;
        state.allLessons = action.payload.lessons;
      })
      .addCase(getAllLessons.rejected, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = false;
        state.lesson_error = true;
        toast.error(action.payload);
      });
  },
});

export const { RESET_LESSONS } = lessonsSlice.actions;
export default lessonsSlice.reducer;
