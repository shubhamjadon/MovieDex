import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { GetNowPlayingResponseType } from "../../../apis/GetNowPlaying";
import getUpcoming from "../../../apis/Upcoming";
import {
  GET_UPCOMING_FAILURE,
  GET_UPCOMING_REQUEST,
  GET_UPCOMING_SUCCESS,
} from "../../slice/UpcomingSlice";

function* watchUpcomingApi(): IterableIterator<any> {
  try {
    const res: any = yield call(getUpcoming, 1);
    const typedRes = res as unknown as GetNowPlayingResponseType;
    yield put(GET_UPCOMING_SUCCESS(typedRes.results));
  } catch (err: any) {
    yield put(GET_UPCOMING_FAILURE());
  }
}

export function* watchUpcoming(): SagaIterator {
  yield takeLatest(GET_UPCOMING_REQUEST, watchUpcomingApi);
}
