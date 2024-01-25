import axios, { AxiosResponse } from 'axios';
import { MUSIC_CONTENT, getDetailData } from './url';
import { PostContentPsops } from './dto';

export const getMusicContents = async (): Promise<AxiosResponse> => {
  return axios.get(MUSIC_CONTENT);
};
// AxiosResponse 형식의 Promise를 반환한다

export const getDetailMusicData = async (
  id: string
): Promise<AxiosResponse> => {
  return axios.get(getDetailData(id));
};

export const postMusicData = async (
  data: PostContentPsops
): Promise<AxiosResponse> => {
  return axios.post(MUSIC_CONTENT, data);
};

export const putMusicData = async (
  data: PostContentPsops
): Promise<AxiosResponse> => {
  return axios.put(MUSIC_CONTENT, data);
};
