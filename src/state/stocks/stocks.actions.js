export const GET_STOCKS = 'GET_STOCKS';
export const ADD_STOCKS = 'ADD_STOCKS';
export const UPDATE_STOCKS = 'UPDATE_STOCKS';

export const getStocks = () => ({
    type: GET_STOCKS,
})

export const addStocks = () => ({
    type: ADD_STOCKS,
})

export const updateStocks = (stocks) => ({
    type: UPDATE_STOCKS,
    payload: stocks,
})

export function fetchStocks() {
    return function (dispatch) {
      dispatch(getStocks());
      return dispatch(updateStocks({}));        
    };
  }