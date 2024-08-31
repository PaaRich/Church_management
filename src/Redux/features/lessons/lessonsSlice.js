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

//get grouped lessons
export const getGroupedLessons = createAsyncThunk(
  "lesson/getGroupedLessons",
  async (_, thunkAPI) => {
    try {
      return await lessonsServices.getGroupedLessons();
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

//get lesson
export const getLesson = createAsyncThunk(
  "lesson/getLesson",
  async (lesson_id, thunkAPI) => {
    try {
      return await lessonsServices.getLesson(lesson_id);
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

//delete lesson
export const deleteLesson = createAsyncThunk(
  "lesson/deleteLesson",
  async (lesson_id, thunkAPI) => {
    try {
      return await lessonsServices.deleteLesson(lesson_id);
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

//update lesson
export const updateLesson = createAsyncThunk(
  "lesson/updateLessons",
  async ({ lesson_id, lessonData }, thunkAPI) => {
    try {
      return await lessonsServices.updateLesson(lesson_id, lessonData);
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
      })

      //get grouped lessons
      .addCase(getGroupedLessons.pending, (state, action) => {
        state.lesson_loading = true;
      })
      .addCase(getGroupedLessons.fulfilled, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = true;
        state.lesson_error = false;
        state.allLessons = action.payload.data;
      })
      .addCase(getGroupedLessons.rejected, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = false;
        state.lesson_error = true;
        toast.error(action.payload);
      })

      //get lesson
      .addCase(getLesson.pending, (state, action) => {
        state.lesson_loading = true;
      })
      .addCase(getLesson.fulfilled, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = true;
        state.lesson_error = false;
        state.lesson = action.payload.lesson;
      })
      .addCase(getLesson.rejected, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = false;
        state.lesson_error = true;
        toast.error(action.payload);
      })

      //delete lesson
      .addCase(deleteLesson.pending, (state, action) => {
        state.lesson_loading = true;
      })
      .addCase(deleteLesson.fulfilled, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = true;
        state.lesson_error = false;
        toast.success("course deleted successfully")
      })
      .addCase(deleteLesson.rejected, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = false;
        state.lesson_error = true;
        toast.error(action.payload);
      })

      //update lesson
      .addCase(updateLesson.pending, (state, action) => {
        state.lesson_loading = true;
      })
      .addCase(updateLesson.fulfilled, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = true;
        state.lesson_error = false;
        toast.success("Course updated successfully");
      })
      .addCase(updateLesson.rejected, (state, action) => {
        state.lesson_loading = false;
        state.lesson_success = false;
        state.lesson_error = true;
        toast.error(action.payload);
      });
  },
});

export const { RESET_LESSONS } = lessonsSlice.actions;
export default lessonsSlice.reducer;
