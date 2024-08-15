import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import complaintServices from "./complaintServices";
import { toast } from "react-toastify";

const initialState = {
  complaintLoading: false,
  complaintError: false,
  complaintSuccess: false,
  allComplaints: [],
  specificComplaint: null,
};

//add complaint
export const addComplaint = createAsyncThunk(
  "complaint/addComplaint",
  async (complaintData, thunkAPI) => {
    try {
      return await complaintServices.addComplaint(complaintData);
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

//get all complaints
export const getAllComplaints = createAsyncThunk(
  "complaint/getAllComplaints",
  async (_, thunkAPI) => {
    try {
      return await complaintServices.getAllComplaints();
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

//get complaint details
export const getComplaint = createAsyncThunk(
  "complaint/getComplaint",
  async (comp_id, thunkAPI) => {
    try {
      return await complaintServices.getComplaintDetails(comp_id);
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

//assign mplaint
export const assignComplaint = createAsyncThunk(
  "complaint/assign-omplaint",
  async ({ comp_id, assigned_to }, thunkAPI) => {
    try {
      return await complaintServices.assignComplaint(comp_id, assigned_to);
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

export const complaintSlice = createSlice({
  name: "complaint",
  initialState,
  reducers: {
    RESET_COMPLAINTS(state) {
      (state.complaintLoading = false),
        (state.complaintError = false),
        (state.complaintSuccess = false);
    },
  },
  extraReducers(builder) {
    builder
      //adding new complaint
      .addCase(addComplaint.pending, (state, action) => {
        state.complaintLoading = true;
      })
      .addCase(addComplaint.fulfilled, (state, action) => {
        state.complaintLoading = false;
        state.complaintSuccess = true;
        state.complaintError = false;
        toast.success("Complaint sent successfully");
      })
      .addCase(addComplaint.rejected, (state, action) => {
        state.complaintLoading = false;
        state.complaintSuccess = false;
        state.complaintError = true;
        toast.error(action.payload);
      })

      //get all complaints
      .addCase(getAllComplaints.pending, (state, action) => {
        state.complaintLoading = true;
      })
      .addCase(getAllComplaints.fulfilled, (state, action) => {
        state.complaintLoading = false;
        state.complaintSuccess = true;
        state.complaintError = false;
        state.allComplaints = action.payload.complaints;
      })
      .addCase(getAllComplaints.rejected, (state, action) => {
        state.complaintLoading = false;
        state.complaintSuccess = false;
        state.complaintError = true;
        toast.error(action.payload);
      })

      //get complaint details
      .addCase(getComplaint.pending, (state, action) => {
        state.complaintLoading = true;
      })
      .addCase(getComplaint.fulfilled, (state, action) => {
        state.complaintLoading = false;
        state.complaintSuccess = true;
        state.complaintError = false;
        state.specificComplaint = action.payload.complaint;
      })
      .addCase(getComplaint.rejected, (state, action) => {
        state.complaintLoading = false;
        state.complaintSuccess = false;
        state.complaintError = true;
        toast.error(action.payload);
      })

      //assign complaint
      .addCase(assignComplaint.pending, (state, action) => {
        state.complaintLoading = true;
      })
      .addCase(assignComplaint.fulfilled, (state, action) => {
        state.complaintLoading = false;
        state.complaintSuccess = true;
        state.complaintError = false;
        toast.success("Complaint successfully assigned to selected coach");
      })
      .addCase(assignComplaint.rejected, (state, action) => {
        state.complaintLoading = false;
        state.complaintSuccess = false;
        state.complaintError = true;
        toast.error(action.payload);
      });
  },
});

export const { RESET_COMPLAINTS } = complaintSlice.actions;
export default complaintSlice.reducer;
