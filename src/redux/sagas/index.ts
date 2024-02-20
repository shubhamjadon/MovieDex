import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchNowPlaying } from "./NowPlaying";
import { watchPopular } from "./Popular";
import { watchTopRated } from "./TopRated";
import { watchUpcoming } from "./Upcoming";

export default function* root(): SagaIterator {
  yield all([
    fork(watchNowPlaying),
    fork(watchPopular),
    fork(watchTopRated),
    fork(watchUpcoming),
  ]);
}
