import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import complaintServices from "./complaintServices";
import { toast } from "react-toastify";

const initialState={
    complaintLoading:false,
    complaintError:false,
    complaintSuccess:false,
    allComplaints:[]
}

//add user
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

export const complaintSlice= createSlice({
    name:"complaint",
    initialState,
    reducers:{
        RESET_COMPLAINTS(state){
            state.complaintLoading=false,
            state.complaintError=false,
            state.complaintSuccess=false
        }
    }
    ,extraReducers(builder){
        builder
            //adding new member
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
    }
})

export const {RESET_COMPLAINTS}= complaintSlice.actions
export default complaintSlice.reducer
