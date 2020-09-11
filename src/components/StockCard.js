import React from 'react';
import { makeStyles, Typography, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    card: {
        display: 'flex',
        border: '1px solid',
        margin: 10,
        width: 'fit-content',
        padding: 5,
    },
    title: {
        textTransform: 'capitalize',
    },
    content: {
      fontSize: 12,
    },
    leftBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 5,
        minWidth: 120,
    },
    rightBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
        minWidth: 100
    },
    checkBox: {
        display: 'flex',
        alignItems: 'flex-start'
    }
}));

function StockCard({ symbol, companyName, latestPrice, week52High, week52Low, withCheckBox, checked, onSelectStock }) {
    const classes = useStyles();
    return(
        <div className={classes.card} >
            <div className={classes.leftBlock}>
                <Typography variant='h6' className={classes.title} >{symbol}</Typography>
                <Typography variant='body2' >{`High: ${week52High}`}</Typography>
                <Typography variant='body2' >{`Low: ${week52Low}`}</Typography>
                <Typography variant='subtitle2' >{companyName}</Typography>
            </div>
            <div className={classes.rightBlock}>
                <Typography variant='h5' >{latestPrice}</Typography>
                <Typography variant='body2' >{'Current'}</Typography>
            </div>
            { withCheckBox &&
                <div className={classes.checkBox} >
                    <Checkbox size="small" color='primary' checked={checked} onClick={onSelectStock} />
                </div>
            }
        </div>
    );
}

export default StockCard;