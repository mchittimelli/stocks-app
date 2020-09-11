import { ADD_STOCKS, COMPARE_AND_UPDATE_STOCKS, UPDATE_STOCKS } from "./stocks.actions";
import { getUserSessionStocks } from "../../SessionStore";

const initialState = {
    stocks: {},
    userStocks: getUserSessionStocks(),
    latestTime: null,
}

const compareAndUpdate = (prevStocks, currentStocks) => {
    let newStocks = {}
    Object.keys(prevStocks).map(stockKey => {
        if(currentStocks[stockKey] && currentStocks[stockKey].quote.latestPrice > prevStocks[stockKey].quote.latestPrice ){
            newStocks = {...newStocks, [stockKey]: {...currentStocks[stockKey], increase: true}}
        }else if(currentStocks[stockKey] && currentStocks[stockKey].quote.latestPrice < prevStocks[stockKey].quote.latestPrice ){
            newStocks = {...newStocks, [stockKey]: {...currentStocks[stockKey], decrease: true}}
        }else{
            newStocks = {...newStocks, [stockKey]: {...currentStocks[stockKey],}}
        }
    })

    return newStocks;
}
const stocksReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_STOCKS:
            return {...state, userStocks: action.payload.userStocks};

        case UPDATE_STOCKS:
            return {...state, stocks: action.payload.stocks}

        case COMPARE_AND_UPDATE_STOCKS:
            return {...state, stocks: compareAndUpdate(state.stocks, action.payload.currentStocks)}

        default:
          return state;

      }
}

export default stocksReducer;