import React from 'react';
import { useSelector } from 'react-redux';
import { stocksStateSelector, myStocksSelector } from './state/stocks/stocks.selectors';

function App() {
  const stocks = useSelector(stocksStateSelector);
  const myStocks = useSelector(myStocksSelector);

  return (
    <div>
      {
        myStocks.map(stock => (
          <p>{stock}</p>
        ))
      }
    </div>
  );
}

export default App;
