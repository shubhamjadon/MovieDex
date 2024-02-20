import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieObjType } from "../../apis/GetNowPlaying";

export interface TopRatedState {
  data: MovieObjType[];
  pageNo: number;
  isLoading: boolean;
}

const initialState: TopRatedState = {
  data: [],
  pageNo: 0,
  isLoading: false,
};

export const topRatedSlice = createSlice({
  name: "TopRated",
  initialState,
  reducers: {
    GET_TOP_RATED_REQUEST: (state) => {
      state.isLoading = true;
    },
    GET_TOP_RATED_SUCCESS: (state, action: PayloadAction<MovieObjType[]>) => {
      state.data = [...state.data, ...action.payload];
      state.pageNo += 1;
      state.isLoading = false;
    },
    GET_TOP_RATED_FAILURE: (state) => {
      state.isLoading = false;
    },
    TOGGLE_TOP_RATED_LIKED: (state, action: PayloadAction<number>) => {
      state.data[action.payload]["liked"] =
        !state.data[action.payload]["liked"];
    },
  },
});

export const {
  GET_TOP_RATED_REQUEST,
  GET_TOP_RATED_SUCCESS,
  GET_TOP_RATED_FAILURE,
  TOGGLE_TOP_RATED_LIKED,
} = topRatedSlice.actions;

export default topRatedSlice.reducer;
