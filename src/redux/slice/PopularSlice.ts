import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieObjType } from "../../apis/GetNowPlaying";

export interface PopularState {
  data: MovieObjType[];
  pageNo: number;
  isLoading: boolean;
}

const initialState: PopularState = {
  data: [],
  pageNo: 0,
  isLoading: false,
};

export const popularSlice = createSlice({
  name: "Popular",
  initialState,
  reducers: {
    GET_POPULAR_REQUEST: (state) => {
      state.isLoading = true;
    },
    GET_POPULAR_SUCCESS: (state, action: PayloadAction<MovieObjType[]>) => {
      state.data = [...state.data, ...action.payload];
      state.pageNo += 1;
      state.isLoading = false;
    },
    GET_POPULAR_FAILURE: (state) => {
      state.isLoading = false;
    },
    TOGGLE_POPULAR_LIKED: (state, action: PayloadAction<number>) => {
      state.data[action.payload]["liked"] =
        !state.data[action.payload]["liked"];
    },
  },
});

export const {
  GET_POPULAR_REQUEST,
  GET_POPULAR_SUCCESS,
  GET_POPULAR_FAILURE,
  TOGGLE_POPULAR_LIKED,
} = popularSlice.actions;

export default popularSlice.reducer;
