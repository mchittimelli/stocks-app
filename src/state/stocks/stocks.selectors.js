import { createSelector } from "reselect";

export const stocksStateSelector = state => state.stocks;

export const myStocksSelector = createSelector(
    stocksStateSelector,
    stocks => stocks.myStocks
)