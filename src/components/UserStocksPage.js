import React, { Fragment, useState } from 'react';

import { Typography, makeStyles, Button } from '@material-ui/core'
import StockCard from './StockCard';
import { useSelector } from 'react-redux';
import { userStocksSelector } from '../state/stocks/stocks.selectors';
import AddStocksDialog from './AddStocksDialog';

const useStyles = makeStyles(() => ({
    
    centerItems: {
        margin: '10px auto',
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

function UserStocksPage() {

    const classes = useStyles();
    const userStocks = useSelector(userStocksSelector);

    const [addStocksDialogOpen, setAddStocksDialogOpen] = useState(false);

    return(
        <div className={classes.container} >
            <Typography variant='h6'>My Stocks</Typography>
            {
                Object.keys(userStocks).length > 0 ?
                <Fragment>
                    <div className={classes.options} >
                        {
                            Object.keys(userStocks).map(stock => (
                                <StockCard key={stock} {...userStocks[stock].quote}/>
                            ))
                        }
                    </div>
                    <Button className={classes.centerItems} onClick={() => setAddStocksDialogOpen(true)} variant={'contained'} color={'primary'} >
                        Edit
                    </Button>
                </Fragment> :
                <Fragment>                    
                    <Typography variant='body2' className={classes.centerItems}>No Stocks Selected</Typography>
                    <Button className={classes.centerItems} onClick={() => setAddStocksDialogOpen(true)} variant={'contained'} color={'primary'} >
                        Add
                    </Button>
                </Fragment>
            }
            <AddStocksDialog open={addStocksDialogOpen} close={() => setAddStocksDialogOpen(false)} />
        </div>
    )
}

export default UserStocksPage;