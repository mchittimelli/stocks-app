import React, { useState, Fragment } from 'react';

import { AppBar, Typography, Toolbar, makeStyles } from '@material-ui/core'
import UserStockFeed from './UserStockFeed';
import { userStocksSelector } from '../state/stocks/stocks.selectors';
import { useSelector } from 'react-redux';
import PopularStockFeed from './PopularStocksFeed';
import useStocks from '../hooks/useStocks';
import UserStocksPage from './UserStocksPage';

const useStyles = makeStyles(() => ({
    menuOptions: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 5,
        marginRight: 'auto'
    },
    menuText: {
        margin: 5,
        cursor: 'pointer'
    },
    menuTextUnderLine: {
        margin: 5,
        cursor: 'pointer',
        textDecoration: 'underline'
    },
    title: {
      width: '25%',
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    paddingAround: {
        padding: 10,
    }, 
    time: {
        margin: '5px 10px 0px auto'
    }
  }));

const currentTime = new Date();

function Dashboard() {
  const classes = useStyles();

  const [view, setView] = useState(true);
  const userStocks = useSelector(userStocksSelector);
  const stocks = useStocks();
  const renderTime = new Date();

    return(
        <div className={classes.container} >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
                        Stock Trading App
                    </Typography>
                    <div className={classes.menuOptions}>
                        <Typography className={view ? classes.menuTextUnderLine : classes.menuText} onClick={() => setView(true)} >
                            Home
                        </Typography>
                        <Typography className={!view ? classes.menuTextUnderLine : classes.menuText} onClick={() => setView(false)} >
                            My Stocks
                        </Typography>
                    </div>
                    <div>
                        <Typography className={classes.time}>
                            {`Updated: ${Math.round((renderTime - currentTime)/1000)} sec ago`}
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            {
                view ? 
                <Fragment>                    
                    <div className={classes.paddingAround} >
                        { 
                            Object.keys(userStocks).length > 0 &&
                            <UserStockFeed onViewClick={() => setView(false)} />
                        }
                    </div>
                    <div className={classes.paddingAround} >
                        { 
                            Object.keys(stocks).length > 0 &&
                            <PopularStockFeed />
                        }
                    </div>
                </Fragment> :
                <Fragment>
                    <div className={classes.paddingAround} >
                        <UserStocksPage />
                    </div>
                </Fragment>
            }
        </div>
    );
}

export default Dashboard;