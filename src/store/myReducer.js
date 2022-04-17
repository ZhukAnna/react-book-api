import { FETCH, SEARCH, SORT, LOAD_MORE, FILTER } from './types.js';

const initialState = {
  data: {},
  search: 'react',
  sorting: 'relevance',
  startId: 0,
  filteredData: null,
  category: 'all',
  numResults: 0,
  books: [],
};

export default function myReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        data: action.payload,
        books: [...state.books, ...action.payload?.items],
        numResults: action.payload.totalItems,
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload,
        books: [],
      };
    case SORT:
      return {
        ...state,
        sorting: action.payload,
        books: [],
      };
    case LOAD_MORE:
      return {
        ...state,
        startId: state.startId + 30,
      };
    case FILTER:
      if (action.payload === 'all') {
        return {
          ...state,
          filteredData: 0,
          category: 'all',
          numResults: state.data.totalItems,
        };
      } else {
        const filtered = state.books.filter((book) =>
          book.volumeInfo.categories?.map((i) => i.toLowerCase()).includes(action.payload)
        );
        return {
          ...state,
          filteredData: filtered,
          category: action.payload,
          numResults: filtered.length,
        };
      }
    default:
      return state;
  }
}
