require('dotenv').config()
const HDWalletProvider = require('@truffle/hdwallet-provider')

const { INFURA_PROJECT_ID, PRIVATE_KEY_KOVAN } = process.env

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
      skipDryRun: true,
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(PRIVATE_KEY_KOVAN, 'https://kovan.infura.io/v3/' + INFURA_PROJECT_ID)
      },
      network_id: '42',
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
