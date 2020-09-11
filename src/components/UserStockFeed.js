import React from 'react';

import { Typography, makeStyles, Button } from '@material-ui/core'
import StockCard from './StockCard';
import { useSelector } from 'react-redux';
import { userStocksSelector } from '../state/stocks/stocks.selectors';

const useStyles = makeStyles(() => ({
    
    viewButton: {
        margin: '0px auto',
        textTransform: 'capitalize',
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

function UserStockFeed({ onViewClick }) {

    const classes = useStyles();
    const userStocks = useSelector(userStocksSelector);

    return(
        <div className={classes.container} >
            <Typography variant='h6'>My Stocks</Typography>
            <div className={classes.options} >
                {
                    Object.keys(userStocks).slice(0, 3).map(stock => (
                        <StockCard key={stock} {...userStocks[stock].quote}/>
                    ))
                }
            </div>
            <Button className={classes.viewButton} onClick={onViewClick} variant={'contained'} color={'primary'} >
                View My Stocks
            </Button>
        </div>
    )
}

export default UserStockFeed;