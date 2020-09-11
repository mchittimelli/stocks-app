import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from '../state/stocks/stocks.actions';
import { stocksStateSelector } from '../state/stocks/stocks.selectors';

const useStocks = () => {
    
    const dispatch = useDispatch();
    const stocks = useSelector(stocksStateSelector);
    const [prevStocks, setPrevStocks] = useState(Object.keys(stocks).length ? true : false)

    useEffect(() => {                   
        dispatch(fetchStocks(false));         
    }, [dispatch])

    useEffect(() =>{
        const intervalVal =  setInterval(() => {
            if(prevStocks){               
                dispatch(fetchStocks(true)); 
            }else{                            
                dispatch(fetchStocks(false));
            }
        }, 3000)
        return () => {
            clearInterval(intervalVal)
        }
    }, [prevStocks])

    useEffect(() => {
        if(Object.keys(stocks).length){
            setPrevStocks(true)
        }else{
            setPrevStocks(false)
        }
    }, [stocks])

    return stocks;
}

export default useStocks;