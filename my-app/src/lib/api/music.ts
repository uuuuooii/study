import axios, { AxiosResponse } from 'axios';
import { MUSIC_CONTENT, getDetailData } from './url';

export const getMusicContents = async (): Promise<AxiosResponse> => {
  return axios.get(MUSIC_CONTENT);
};
// AxiosResponse 형식의 Promise를 반환한다

export const getDetailMusicData = async (
  id: string
): Promise<AxiosResponse> => {
  return axios.get(getDetailData(id));
};
