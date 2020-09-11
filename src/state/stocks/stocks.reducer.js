import { ADD_STOCKS, UPDATE_STOCKS } from "./stocks.actions";
import { mockStocks } from "../../mockData";

const initialState = {
    stocks: {},
    userStocks: {},
}

const stocksReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_STOCKS:
            return {...state, userStocks: action.payload.userStocks};

        case UPDATE_STOCKS:
            return {...state, stocks: action.payload.stocks}
            
        default:
          return state;

      }
}

export default stocksReducer;