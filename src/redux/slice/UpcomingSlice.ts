import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieObjType } from "../../apis/GetNowPlaying";

export interface UpcomingState {
  data: MovieObjType[];
  pageNo: number;
  isLoading: boolean;
}

const initialState: UpcomingState = {
  data: [],
  pageNo: 0,
  isLoading: false,
};

export const upcomingSlice = createSlice({
  name: "Upcoming",
  initialState,
  reducers: {
    GET_UPCOMING_REQUEST: (state) => {
      state.isLoading = true;
    },
    GET_UPCOMING_SUCCESS: (state, action: PayloadAction<MovieObjType[]>) => {
      state.data = [...state.data, ...action.payload];
      state.pageNo += 1;
      state.isLoading = false;
    },
    GET_UPCOMING_FAILURE: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  GET_UPCOMING_REQUEST,
  GET_UPCOMING_SUCCESS,
  GET_UPCOMING_FAILURE,
} = upcomingSlice.actions;

export default upcomingSlice.reducer;
