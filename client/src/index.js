import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StylesProvider } from '@material-ui/core/styles';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </Provider>,
  document.getElementById('root')
);
