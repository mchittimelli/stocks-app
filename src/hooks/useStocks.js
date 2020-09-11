import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from '../state/stocks/stocks.actions';
import { stocksStateSelector } from '../state/stocks/stocks.selectors';

const useStocks = () => {
    const dispatch = useDispatch();
    const stocks = useSelector(stocksStateSelector);

    useEffect(() => {
        dispatch(fetchStocks());
    }, [dispatch])

    return stocks;
}

export default useStocks;