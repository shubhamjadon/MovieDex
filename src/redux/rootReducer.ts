import { configureStore, combineReducers } from "@reduxjs/toolkit";
import NowPlayingSlice from "./slice/NowPlayingSlice";
import PopularSlice from "./slice/PopularSlice";
import TopRatedSlice from "./slice/TopRatedSlice";
import UpcomingSlice from "./slice/UpcomingSlice";

export default combineReducers({
  NowPlayingSlice,
  PopularSlice,
  TopRatedSlice,
  UpcomingSlice,
});
