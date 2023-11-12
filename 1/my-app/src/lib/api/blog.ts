import axios, { AxiosResponse } from 'axios';
import POST_CONTENT from './url';

const getBlogContents = async (): Promise<AxiosResponse> => {
  return axios.get(POST_CONTENT);
};

export default getBlogContents;
