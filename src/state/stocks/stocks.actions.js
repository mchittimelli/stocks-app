import { IEXCloudClient } from "node-iex-cloud";
import fetch from "node-fetch";
import { mockStocks } from "../../mockData";
import { setUserSessionStocks } from "../../SessionStore";

export const ADD_STOCKS = 'ADD_STOCKS';
export const UPDATE_STOCKS = 'UPDATE_STOCKS';
export const COMPARE_AND_UPDATE_STOCKS = 'COMPARE_AND_UPDATE_STOCKS';

const PUBLIC_TOKEN = 'pk_1de3f798d16e4f3ea2df9f433777569b ';

export const addStocks = (userStocks) => ({
    type: ADD_STOCKS,
    payload: {
        userStocks
    },
})

export const updateStocks = (stocks) => ({
    type: UPDATE_STOCKS,
    payload: {
        stocks
    },
})

export const compareAndUpdateStocks = (currentStocks) => ({
    type: COMPARE_AND_UPDATE_STOCKS,
    payload: {
        currentStocks,
    }
})

export function fetchStocks(stocksExists) {
    return function (dispatch) {
        console.log(stocksExists)
      const nodeFetch = fetch.bind()
      const iex = new IEXCloudClient(nodeFetch, {
        sandbox: false,
        publishable: PUBLIC_TOKEN,
        version: "stable"
      })
      iex.symbols("googl,amzn,fb,aapl,pega,adbe,tsla,ebay,wmt,cost").quote()
      .then(res => {
          console.log(res)
          // API is always returning token error
          if(stocksExists){            
            return dispatch(compareAndUpdateStocks(res));
          } else{
              return dispatch(updateStocks(res));
          }
        })
        .catch(err => {
           console.log(err)
          // return dispatch(updateStocks(mockStocks)); 
        });       
    };
  }

export function addUserStocks(userStocks){
    return function (dispatch){
        setUserSessionStocks(userStocks)
        return dispatch(addStocks(userStocks))
    }
}