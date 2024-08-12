import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import mustardServices from "./mustardServices";

const initialState = {
  mustardLoading: false,
  mustardError: false,
  mustardSuccess: false,
  allMustards: [],
};

//create mustard
export const createMustard = createAsyncThunk(
  "mustard/addMinistry",
  async (data, thunkAPI) => {
    try {
      return await mustardServices.addMustard(data);
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

//get mustards
export const getMustards = createAsyncThunk(
  "mustard/getMustards",
  async (_, thunkAPI) => {
    try {
      return await mustardServices.getMustards();
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

//get mustards
export const deleteMustard = createAsyncThunk(
  "mustard/delete-mustard",
  async (id, thunkAPI) => {
    try {
      return await mustardServices.deleteMustard(id);
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

export const mustardSlice = createSlice({
  name: "mustard",
  initialState,
  reducers: {
    RESET_MUSTARD_STATES(state) {
      (state.mustardLoading = false),
        (state.mustardError = false),
        (state.mustardSuccess = false);
    },
  },
  extraReducers(builder) {
    builder
      //adding new mustard
      .addCase(createMustard.pending, (state, action) => {
        state.mustardLoading = true;
      })
      .addCase(createMustard.fulfilled, (state, action) => {
        state.mustardLoading = false;
        state.mustardSuccess = true;
        state.mustardError = false;
        toast.success("Mustard Seed Added");
      })
      .addCase(createMustard.rejected, (state, action) => {
        state.mustardLoading = false;
        state.mustardSuccess = false;
        state.mustardError = true;
        toast.error(action.payload);
      })

      //get all mustards
      .addCase(getMustards.pending, (state, action) => {
        state.mustardLoading = true;
      })
      .addCase(getMustards.fulfilled, (state, action) => {
        state.mustardLoading = false;
        state.mustardSuccess = true;
        state.mustardError = false;
        state.allMustards = action.payload.mustards;
      })
      .addCase(getMustards.rejected, (state, action) => {
        state.mustardLoading = false;
        state.mustardSuccess = false;
        state.mustardError = true;
        toast.error(action.payload);
      })

      //delete mustard
      .addCase(deleteMustard.pending, (state, action) => {
        state.mustardLoading = true;
      })
      .addCase(deleteMustard.fulfilled, (state, action) => {
        state.mustardLoading = false;
        state.mustardSuccess = true;
        state.mustardError = false;
        toast.success("mustard deleted");
      })
      .addCase(deleteMustard.rejected, (state, action) => {
        state.mustardLoading = false;
        state.mustardSuccess = false;
        state.mustardError = true;
        toast.error(action.payload);
      });
  },
});

export const { RESET_MUSTARD_STATES } = mustardSlice.actions;
export default mustardSlice.reducer;
