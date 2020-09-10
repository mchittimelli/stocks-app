// React
import React from 'react';
import { render } from 'react-dom';

// App Component
import App from './App';

// Redux
import stocksReducer from './state/stocks/stocks.reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  stocksReducer,
  applyMiddleware(thunk)
)

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
