import { GET_STOCKS, ADD_STOCKS, UPDATE_STOCKS } from "./stocks.actions";

const initialState = {
    stocks: {
        myStocks:[1, 2, 3]
    },
}

const stocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STOCKS:
        case ADD_STOCKS:
            return {...state};
        case UPDATE_STOCKS:
            return {...state, stocks: action.payload.stocks}
        default:
          return state;
      }
}

export default stocksReducer;