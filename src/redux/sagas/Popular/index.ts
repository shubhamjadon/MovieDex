import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { GetNowPlayingResponseType } from "../../../apis/GetNowPlaying";
import {
  GET_POPULAR_FAILURE,
  GET_POPULAR_REQUEST,
  GET_POPULAR_SUCCESS,
} from "../../slice/PopularSlice";
import getPopular from "../../../apis/Popular";

function* watchPopularApi(): IterableIterator<any> {
  try {
    const res: any = yield call(getPopular, 1);
    const typedRes = res as unknown as GetNowPlayingResponseType;
    yield put(GET_POPULAR_SUCCESS(typedRes.results));
  } catch (err: any) {
    yield put(GET_POPULAR_FAILURE());
  }
}

export function* watchPopular(): SagaIterator {
  yield takeLatest(GET_POPULAR_REQUEST, watchPopularApi);
}
