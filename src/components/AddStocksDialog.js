import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { userStocksSelector, stocksStateSelector } from '../state/stocks/stocks.selectors';
import StockCard from './StockCard';
import { addUserStocks } from '../state/stocks/stocks.actions';

const getSelectedStocks = (stocks, userStocks) => {
    let selectedList = {};
    Object.keys(stocks).forEach((stock, index) => {
        if(userStocks[stock]){
            selectedList = { ...selectedList, [index]: true}
        }else{
            selectedList = { ...selectedList, [index]: false}
        }
    })
    return selectedList;
}

function AddStocksDialog({open, close}) {
    
  const userStocks = useSelector(userStocksSelector);
  const stocks = useSelector(stocksStateSelector);
  const [selectedList, setSelectedList] = useState(getSelectedStocks(stocks, userStocks));

  const onSelectStock = (index) => {
    let nextSelectedList = selectedList;
    nextSelectedList = {...nextSelectedList, [index]: !nextSelectedList[index]}
    setSelectedList(nextSelectedList);
  }

  const dispatch = useDispatch();

  const onSave = () => {
    let userSelectedStocks = {};
    const stocksIndex = Object.keys(stocks);
    Object.keys(selectedList).forEach(key => {
        if(selectedList[key]){
            userSelectedStocks = {...userSelectedStocks, [stocksIndex[key]]: stocks[stocksIndex[key]] }
        }
    })
    dispatch(addUserStocks(userSelectedStocks));
    close();
  }

    return(
        <Dialog
            open={open}
            onClose={close}
            disableBackdropClick
            disableEscapeKeyDown   
        >
            <DialogTitle> Add Stocks </DialogTitle>
            <DialogContent>
                {
                    Object.keys(stocks).map((stock, index) => (
                        <StockCard key={stock} {...stocks[stock].quote} withCheckBox={true} checked={selectedList[index]} onSelectStock={() => onSelectStock(index)} />
                    ))
                }
            </DialogContent>
            <DialogActions>
                <Button color='primary' onClick={close}>
                    Cancel
                </Button>
                <Button color='primary' onClick={onSave}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddStocksDialog;