export const USER_STOCKS = 'USER_STOCKS';

export const getUserSessionStocks = () => {
    return sessionStorage.getItem(USER_STOCKS) ? JSON.parse(sessionStorage.getItem(USER_STOCKS)) : {};
};

export const setUserSessionStocks = (userStocks) => {
    sessionStorage.setItem(USER_STOCKS, JSON.stringify(userStocks))
}