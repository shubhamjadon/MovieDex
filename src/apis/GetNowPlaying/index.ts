import { AxiosResponse } from "axios";
import API from "../../constants/APIConstants";
import sendRequest from "../../utils/sendRequest";

export interface MovieObjType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GetNowPlayingResponseType {
  page: number;
  results: MovieObjType[];
}

export default async function getNowPlaying(
  pageNo: number
): Promise<AxiosResponse<GetNowPlayingResponseType>> {
  return sendRequest({
    url: API.GET_NOW_PLAYING + pageNo,
  });
}
