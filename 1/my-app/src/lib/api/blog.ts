import axios, { AxiosResponse } from 'axios';
import POST_CONTENT from './url';

const getBlogContents = async (): Promise<AxiosResponse> => {
  return axios.get(POST_CONTENT);
};
// AxiosResponse 형식의 Promise를 반환한다
export default getBlogContents;
