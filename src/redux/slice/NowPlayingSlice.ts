import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MovieObjType } from "../../apis/GetNowPlaying";

export interface NowPlayingState {
  data: MovieObjType[];
  pageNo: number;
  isLoading: boolean;
}

const initialState: NowPlayingState = {
  data: [],
  pageNo: 0,
  isLoading: false,
};

export const nowPlayingSlice = createSlice({
  name: "NowPlaying",
  initialState,
  reducers: {
    GET_NOW_PLAYING_REQUEST: (state) => {
      state.isLoading = true;
    },
    GET_NOW_PLAYING_SUCCESS: (state, action: PayloadAction<MovieObjType[]>) => {
      state.data = [...state.data, ...action.payload];
      state.pageNo += 1;
      state.isLoading = false;
    },
    GET_NOW_PLAYING_FAILURE: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  GET_NOW_PLAYING_REQUEST,
  GET_NOW_PLAYING_SUCCESS,
  GET_NOW_PLAYING_FAILURE,
} = nowPlayingSlice.actions;

export default nowPlayingSlice.reducer;
