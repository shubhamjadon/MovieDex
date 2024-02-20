import { AxiosResponse } from "axios";
import API from "../../constants/APIConstants";
import sendRequest from "../../utils/sendRequest";
import { GetNowPlayingResponseType } from "../GetNowPlaying";

export default async function getPopular(
  pageNo: number
): Promise<AxiosResponse<GetNowPlayingResponseType>> {
  return sendRequest({
    url: API.GET_POPULAR + pageNo,
  });
}
