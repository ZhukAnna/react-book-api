import { FETCH, SEARCH, SORT, LOAD_MORE, FILTER } from './types.js';

export const fetchAction = (payload) => ({
  type: FETCH,
  payload,
});

export const searchAction = (payload) => ({
  type: SEARCH,
  payload,
});

export const sortAction = (payload) => ({
  type: SORT,
  payload,
});

export const loadMoreAction = () => ({
  type: LOAD_MORE,
});

export const filterAction = (payload) => ({
  type: FILTER,
  payload,
});
