import { AxiosResponse } from "axios";
import API from "../../constants/APIConstants";
import sendRequest from "../../utils/sendRequest";
import { GetNowPlayingResponseType } from "../GetNowPlaying";

export default async function getTopRated(
  pageNo: number
): Promise<AxiosResponse<GetNowPlayingResponseType>> {
  return sendRequest({
    url: API.GET_TOP_RATED + pageNo,
  });
}
