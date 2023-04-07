import React from 'react';
import ReactDOM from 'react-dom';
import { Drizzle } from '@drizzle/store';
// import { DrizzleContext } from '@drizzle/react-plugin';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Blackjack from './Blackjack.json';

const options = {
  contracts: [Blackjack],
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545',
    },
  },
};

const drizzle = new Drizzle(options);

ReactDOM.render(
  <DrizzleContext.Provider drizzle={drizzle}>
    <App />
  </DrizzleContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
