import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { watchNowPlaying } from "./NowPlaying";

export default function* root(): SagaIterator {
  yield all([fork(watchNowPlaying)]);
}
