import { configureStore, combineReducers } from "@reduxjs/toolkit";
import NowPlayingSlice from "./slice/NowPlayingSlice";

export default combineReducers({
  NowPlayingSlice,
});
