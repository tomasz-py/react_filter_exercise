import * as types from "../types/people";

// this is an example action
export const doNothing = payload => ({
  type: types.DO_NOTHING,
  payload: payload
});

// ...
export const setFilterQuery = filterQuery => ({
  type: types.FILTER_QUERY,
  payload: filterQuery
});
