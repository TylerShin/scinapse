import axios from 'axios';
import { API_URL } from './constants';

interface SearchPapersParams {
  query: string;
  sort: string; // TODO: change it to the limited values e.g. RELEVANCE...
  filter: string;
  page: number;
  enableDetectingYear: boolean;
  weightedSearchType: 'a' | 'b' | 'c' | 'd';
}
export const searchPapers = ({ query, sort, filter, page = 0, enableDetectingYear, weightedSearchType }: SearchPapersParams) => {
  return axios.get(`${API_URL}search`, {
    params: {
      q: query,
      sort,
      filter,
      page,
      yd: enableDetectingYear,
      wcm: weightedSearchType,
    },
  });
};

export const getPaper = (id: string | number) => {
  return axios.get(`${API_URL}papers/${id}`);
};
