require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

const { INFURA_PROJECT_ID, PRIVATE_KEY_ROPSTEN_1, PRIVATE_KEY_ROPSTEN_2 } = process.env

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      skipDryRun: true,
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          [PRIVATE_KEY_ROPSTEN_1, PRIVATE_KEY_ROPSTEN_2],
          'https://ropsten.infura.io/v3/' + INFURA_PROJECT_ID
        )
      },
      network_id: '3',
      skipDryRun: true,
    },
  },
  mocha: {
    enableTimeouts: false,
  },
  compilers: {
    solc: {
      version: '0.6.6',
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
}
