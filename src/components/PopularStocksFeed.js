import React from 'react';

import { Typography, makeStyles } from '@material-ui/core'
import StockCard from './StockCard';
import { useSelector } from 'react-redux';
import { stocksStateSelector } from '../state/stocks/stocks.selectors';

const useStyles = makeStyles(() => ({
    
    viewButton: {
        margin: '0px auto',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    options: {
        display: 'flex',
        padding: 10,
        flexWrap: 'wrap',
    }
  }));

function PopularStockFeed() {

    const classes = useStyles();
    const stocks = useSelector(stocksStateSelector);

    return(
        <div className={classes.container} >
            <Typography variant='h6'>Popular Stocks</Typography>
            <div className={classes.options} >
                {
                    Object.keys(stocks).map(stock => (
                        <StockCard key={stock} {...stocks[stock].quote}/>
                    ))
                }
            </div>
        </div>
    )
}

export default PopularStockFeed;