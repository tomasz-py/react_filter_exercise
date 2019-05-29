import * as types from "../types/people";

export const setFilterQuery = filterQuery => ({
  type: types.FILTER_QUERY,
  payload: filterQuery
});
