import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import ministryServices from "./ministryServices";

const initialState = {
  ministryLoading: false,
  ministryError: false,
  ministrySuccess: false,
  allMinistries: [],
};

//create ministry
export const createMinistry = createAsyncThunk(
  "ministry/addMinistry",
  async (data, thunkAPI) => {
    try {
      return await ministryServices.addMinistry(data);
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

//get ministries
export const getMinistries = createAsyncThunk(
  "ministry/get-ministries",
  async (_, thunkAPI) => {
    try {
      return await ministryServices.getMinistries();
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

//delete ministry
export const deleteMinistry = createAsyncThunk(
  "ministry/delete-ministry",
  async (id, thunkAPI) => {
    try {
      return await ministryServices.deleteMinistry(id);
    } catch (error) {
      console.log(error);
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

export const ministrySlice = createSlice({
  name: "ministry",
  initialState,
  reducers: {
    RESET_MINISTRY_STATES(state) {
      (state.ministryLoading = false),
        (state.ministryError = false),
        (state.ministrySuccess = false);
    },
  },
  extraReducers(builder) {
    builder
      //adding new ministry
      .addCase(createMinistry.pending, (state, action) => {
        state.ministryLoading = true;
      })
      .addCase(createMinistry.fulfilled, (state, action) => {
        state.ministryLoading = false;
        state.ministrySuccess = true;
        state.ministryError = false;
        toast.success("Ministry Added");
      })
      .addCase(createMinistry.rejected, (state, action) => {
        state.ministryLoading = false;
        state.ministrySuccess = false;
        state.ministryError = true;
        toast.error(action.payload);
      })

      //get Ministries
      .addCase(getMinistries.pending, (state, action) => {
        state.ministryLoading = true;
      })
      .addCase(getMinistries.fulfilled, (state, action) => {
        state.ministryLoading = false;
        state.ministrySuccess = true;
        state.ministryError = false;
        state.allMinistries = action.payload.ministries;
      })
      .addCase(getMinistries.rejected, (state, action) => {
        state.ministryLoading = false;
        state.ministrySuccess = false;
        state.ministryError = true;
        toast.error(action.payload);
      })
    
      //delete minstry
      .addCase(deleteMinistry.pending, (state, action) => {
        state.ministryLoading = true;
      })
      .addCase(deleteMinistry.fulfilled, (state, action) => {
        state.ministryLoading = false;
        state.ministrySuccess = true;
        state.ministryError = false;
        toast.success("ministry deleted")
      })
      .addCase(deleteMinistry.rejected, (state, action) => {
        state.ministryLoading = false;
        state.ministrySuccess = false;
        state.ministryError = true;
        toast.error(action.payload);
      });
  },
});

export const { RESET_MINISTRY_STATES } = ministrySlice.actions;
export default ministrySlice.reducer;
