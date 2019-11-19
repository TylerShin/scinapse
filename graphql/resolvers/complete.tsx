import axios from 'axios';
import { API_URL } from './constants';

interface GetAutoCompleteSearchKeywordParams {
  query?: string;
}
export function getAutoCompleteSearchKeyword({ query }: GetAutoCompleteSearchKeywordParams) {
  return axios.get(`${API_URL}complete`, { params: { q: query } });
}
