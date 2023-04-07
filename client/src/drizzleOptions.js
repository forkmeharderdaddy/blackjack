import Blackjack from './Blackjack.json';

const drizzleOptions = {
  contracts: [Blackjack],
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545',
    },
  },
};

export default drizzleOptions;
