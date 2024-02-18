import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_NOW_PLAYING_FAILURE,
  GET_NOW_PLAYING_REQUEST,
  GET_NOW_PLAYING_SUCCESS,
} from "../../slice/NowPlayingSlice";
import getNowPlaying, {
  GetNowPlayingResponseType,
} from "../../../apis/GetNowPlaying";

function* watchNowPlayingApi(): IterableIterator<any> {
  try {
    const res: any = yield call(getNowPlaying, 1);
    const typedRes = res as unknown as GetNowPlayingResponseType;
    yield put(GET_NOW_PLAYING_SUCCESS(typedRes.results));
  } catch (err: any) {
    yield put(GET_NOW_PLAYING_FAILURE());
  }
}

export function* watchNowPlaying(): SagaIterator {
  yield takeLatest(GET_NOW_PLAYING_REQUEST, watchNowPlayingApi);
}
