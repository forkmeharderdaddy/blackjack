export const contractABI = [
  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "round",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "cardValue",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "score",
          "type": "uint8"
        }
      ],
      "name": "CardDrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "name": "LogNewProvableQuery",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "cards",
          "type": "string"
        }
      ],
      "name": "LogNewWolframRandomDraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "round",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "player",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bet",
          "type": "uint256"
        }
      ],
      "name": "NewRound",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "playerHand",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "playerSplitHand",
          "type": "uint256[]"
        }
      ],
      "name": "PlayerHand",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Received",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "round",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "payout",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "playerScore",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "dealerScore",
          "type": "uint8"
        }
      ],
      "name": "Result",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gameId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "round",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "enum Blackjack.Stage",
          "name": "newStage",
          "type": "uint8"
        }
      ],
      "name": "StageChanged",
      "type": "event"
    },
    {
      "stateMutability": "nonpayable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "doubleDown",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDealerState",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "hand",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "score",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getGameState",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "gameId",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "startTime",
          "type": "uint64"
        },
        {
          "internalType": "uint256",
          "name": "gameMaxBet",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "round",
          "type": "uint64"
        },
        {
          "internalType": "enum Blackjack.Stage",
          "name": "stage",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPlayerState",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "hand",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "splitHand",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256",
          "name": "handScore",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "splitHandScore",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "bet",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "splitBet",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "doubleDownBet",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "splitDoubleDownBet",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "newRound",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "split",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stand",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
];

export const contractAddress = 0xA41BF45cE881938E41Fe84AD3A36417486701aEF; // Replace with your contract address
