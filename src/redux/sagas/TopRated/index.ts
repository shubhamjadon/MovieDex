import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { GetNowPlayingResponseType } from "../../../apis/GetNowPlaying";
import getTopRated from "../../../apis/TopRated";
import {
  GET_TOP_RATED_FAILURE,
  GET_TOP_RATED_REQUEST,
  GET_TOP_RATED_SUCCESS,
} from "../../slice/TopRatedSlice";

function* watchTopRatedApi(): IterableIterator<any> {
  try {
    const res: any = yield call(getTopRated, 1);
    const typedRes = res as unknown as GetNowPlayingResponseType;
    yield put(GET_TOP_RATED_SUCCESS(typedRes.results));
  } catch (err: any) {
    yield put(GET_TOP_RATED_FAILURE());
  }
}

export function* watchTopRated(): SagaIterator {
  yield takeLatest(GET_TOP_RATED_REQUEST, watchTopRatedApi);
}
