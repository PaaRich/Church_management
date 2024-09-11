import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "./authServices";
import { toast } from "react-toastify";

const initialState = {
  isLoggedIn: false,
  activeUser: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  allUsers: [],
  allChildren:[],
  user: null,
  ministryMembers: [],
  mustardMembers: [],
  stats:null
};

//add user
export const addUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authServices.addUser(userData);
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

//login user
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authServices.loginUser(userData);
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

//get login status
export const getLoginStatus = createAsyncThunk(
  "auth/login-status",
  async (_, thunkAPI) => {
    try {
      return await authServices.getLoginStatus();
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

//logout user
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      return await authServices.logoutUser();
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

//get all users
export const getAllUser = createAsyncThunk(
  "auth/all-users",
  async (_, thunkAPI) => {
    try {
      return await authServices.getAllUsers();
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


//get user Stats
export const getUserStats = createAsyncThunk(
  "auth/get-user-stats",
  async (_, thunkAPI) => {
    try {
      return await authServices.getUserStats();
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

//get ministry Stats
export const getMinistryStats = createAsyncThunk(
  "auth/get-ministry-stats",
  async (_, thunkAPI) => {
    try {
      return await authServices.getMinistryStats();
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

//get mustard Stats
export const getMustardStats = createAsyncThunk(
  "auth/get-mustard-stats",
  async (_, thunkAPI) => {
    try {
      return await authServices.getMustardStats();
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

//get all coaches
export const getAllCoaches = createAsyncThunk(
  "auth/all-coaches",
  async (_, thunkAPI) => {
    try {
      return await authServices.getAllCoaches();
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

//find user
export const findUser = createAsyncThunk(
  "auth/find-user",
  async (data, thunkAPI) => {
    try {
      return await authServices.findUser(data);
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

//update user
export const updateUser = createAsyncThunk(
  "auth/update-user",
  async ({ userData, userId }, thunkAPI) => {
    try {
      return await authServices.updateUser(userData, userId);
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

//update user profile
export const updateUserProfile = createAsyncThunk(
  "auth/update-user-profile",
  async ( userData , thunkAPI) => {
    try {
      return await authServices.updateUserProfile(userData);
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

//register coach
export const registerCoach = createAsyncThunk(
  "auth/register-coach",
  async (coachData, thunkAPI) => {
    try {
      return await authServices.registerCoach(coachData);
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

//get user
export const getUser = createAsyncThunk(
  "auth/get-user",
  async (userId, thunkAPI) => {
    try {
      return await authServices.getUser(userId);
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

//get current user
export const getMe = createAsyncThunk(
  "auth/getMe",
  async (_, thunkAPI) => {
    try {
      return await authServices.getMe();
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

//get ministries data
export const getMinistries = createAsyncThunk(
  "auth/get-ministries",
  async (ministry, thunkAPI) => {
    try {
      return await authServices.getMinistries(ministry);
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

//get mustards data
export const getMustards = createAsyncThunk(
  "auth/get-mustards",
  async (mustard, thunkAPI) => {
    try {
      return await authServices.getMustards(mustard);
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

//request password reset
export const requestPasswordRequest = createAsyncThunk(
  "auth/password-reset",
  async (data, thunkAPI) => {
    try {
      return await authServices.requestPasswordRequest(data);
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

//schedule meeting
export const scheduleMeeting = createAsyncThunk(
  "auth/schedule-meeting",
  async (meetingData, thunkAPI) => {
    try {
      return await authServices.scheduleMeeting(meetingData);
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

//change password
export const changePassword = createAsyncThunk(
  "auth/change-password",
  async (passwordData, thunkAPI) => {
    try {
      return await authServices.changePassword(passwordData);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    builder
      //adding new member
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("member added successfully");
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //login user
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.activeUser = action.payload.user;
        toast.success("logged in successfully");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //logout user
      .addCase(logoutUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.activeUser = null;
        toast.success("logout successful");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get login status
      .addCase(getLoginStatus.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getLoginStatus.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.status;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.activeUser = action.payload.user;
      })
      .addCase(getLoginStatus.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get all users
      .addCase(getAllUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allUsers = action.payload.users;
        state.allChildren= action.payload.children
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get users stats
      .addCase(getUserStats.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.stats = action.payload.data;
      })
      .addCase(getUserStats.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get ministry stats
      .addCase(getMinistryStats.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMinistryStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.stats = action.payload.data;
      })
      .addCase(getMinistryStats.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get mustard stats
      .addCase(getMustardStats.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMustardStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.stats = action.payload.data;
      })
      .addCase(getMustardStats.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get all coaches
      .addCase(getAllCoaches.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCoaches.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allUsers = action.payload.coaches;
      })
      .addCase(getAllCoaches.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //find user
      .addCase(findUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(findUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload.user;
      })
      .addCase(findUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //update user
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("user updated successfully");
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //update user profile
      .addCase(updateUserProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user= action.payload.user
        toast.success("profile updated");
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //register coach
      .addCase(registerCoach.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerCoach.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("coach register successfully");
      })
      .addCase(registerCoach.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get user
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get user
      .addCase(getMe.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.user = action.payload.user;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get ministry users
      .addCase(getMinistries.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMinistries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.ministryMembers = action.payload.members;
      })
      .addCase(getMinistries.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //get mustard users
      .addCase(getMustards.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getMustards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.mustardMembers = action.payload.members;
      })
      .addCase(getMustards.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //request password reset
      .addCase(requestPasswordRequest.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(requestPasswordRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("new password was sent to your phone number")
      })
      .addCase(requestPasswordRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })

      //schedule meeting
      .addCase(scheduleMeeting.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(scheduleMeeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("messages sent to respective members")
      })
      .addCase(scheduleMeeting.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      })
    
      //change password
      .addCase(changePassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("password changed successfully")
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        toast.error(action.payload);
      });
  },
});

export const { RESET } = authSlice.actions;
export default authSlice.reducer;
