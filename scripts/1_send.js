const sablier_ABI = [
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'tokenAddress', type: 'address' }],
    name: 'getEarnings',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'nextStreamId',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: 'streamId', type: 'uint256' }],
    name: 'getCompoundingStream',
    outputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'deposit', type: 'uint256' },
      { internalType: 'address', name: 'tokenAddress', type: 'address' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'stopTime', type: 'uint256' },
      { internalType: 'uint256', name: 'remainingBalance', type: 'uint256' },
      { internalType: 'uint256', name: 'ratePerSecond', type: 'uint256' },
      { internalType: 'uint256', name: 'exchangeRateInitial', type: 'uint256' },
      { internalType: 'uint256', name: 'senderSharePercentage', type: 'uint256' },
      { internalType: 'uint256', name: 'recipientSharePercentage', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'uint256', name: 'streamId', type: 'uint256' },
      { internalType: 'address', name: 'who', type: 'address' },
    ],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'unpause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'isPauser',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'uint256', name: 'streamId', type: 'uint256' }],
    name: 'cancelStream',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'uint256', name: 'streamId', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'withdrawFromStream',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'deposit', type: 'uint256' },
      { internalType: 'address', name: 'tokenAddress', type: 'address' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'stopTime', type: 'uint256' },
      { internalType: 'uint256', name: 'senderSharePercentage', type: 'uint256' },
      { internalType: 'uint256', name: 'recipientSharePercentage', type: 'uint256' },
    ],
    name: 'createCompoundingStream',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'addPauser',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'pause',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: 'streamId', type: 'uint256' }],
    name: 'getStream',
    outputs: [
      { internalType: 'address', name: 'sender', type: 'address' },
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'deposit', type: 'uint256' },
      { internalType: 'address', name: 'tokenAddress', type: 'address' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'stopTime', type: 'uint256' },
      { internalType: 'uint256', name: 'remainingBalance', type: 'uint256' },
      { internalType: 'uint256', name: 'ratePerSecond', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'uint256', name: 'streamId', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'interestOf',
    outputs: [
      { internalType: 'uint256', name: 'senderInterest', type: 'uint256' },
      { internalType: 'uint256', name: 'recipientInterest', type: 'uint256' },
      { internalType: 'uint256', name: 'sablierInterest', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'isOwner',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'uint256', name: 'feePercentage', type: 'uint256' }],
    name: 'updateFee',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: 'streamId', type: 'uint256' }],
    name: 'isCompoundingStream',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: 'streamId', type: 'uint256' }],
    name: 'deltaOf',
    outputs: [{ internalType: 'uint256', name: 'delta', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'tokenAddress', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'takeEarnings',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'recipient', type: 'address' },
      { internalType: 'uint256', name: 'deposit', type: 'uint256' },
      { internalType: 'address', name: 'tokenAddress', type: 'address' },
      { internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { internalType: 'uint256', name: 'stopTime', type: 'uint256' },
    ],
    name: 'createStream',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'cTokenManager',
    outputs: [{ internalType: 'contract ICTokenManager', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'fee',
    outputs: [{ internalType: 'uint256', name: 'mantissa', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'cTokenManagerAddress', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'streamId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'exchangeRate', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'senderSharePercentage', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'recipientSharePercentage', type: 'uint256' },
    ],
    name: 'CreateCompoundingStream',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'streamId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'senderInterest', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'recipientInterest', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'sablierInterest', type: 'uint256' },
    ],
    name: 'PayInterest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'tokenAddress', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'TakeEarnings',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'uint256', name: 'fee', type: 'uint256' }],
    name: 'UpdateFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }],
    name: 'PauserAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: 'address', name: 'account', type: 'address' }],
    name: 'PauserRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'streamId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
      { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'deposit', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'tokenAddress', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'startTime', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'stopTime', type: 'uint256' },
    ],
    name: 'CreateStream',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'streamId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'WithdrawFromStream',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'streamId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
      { indexed: true, internalType: 'address', name: 'recipient', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'senderBalance', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'recipientBalance', type: 'uint256' },
    ],
    name: 'CancelStream',
    type: 'event',
  },
]
const sablier_address = '0xc04Ad234E01327b24a831e3718DBFcbE245904CC' //Ropsten
const sablier = new web3.eth.Contract(sablier_ABI, sablier_address)

const weth_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'guy', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'src', type: 'address' },
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'wad', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'deposit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: true, name: 'guy', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: true, name: 'dst', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'dst', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: 'src', type: 'address' },
      { indexed: false, name: 'wad', type: 'uint256' },
    ],
    name: 'Withdrawal',
    type: 'event',
  },
]
const weth_address = '0x0a180A76e4466bF68A7F86fB029BEd3cCcFaAac5'
const weth = new web3.eth.Contract(weth_ABI, weth_address)

/** Creating money stream via sablier.finance.
 *
 * Script:
 * converts ETH to WETH
 * approves Sablier protocol to spend WETH
 * creates the money stream from "sender" to "recipient"
 *
 * After stream creation, "recipient" will start receiving 1 wei/s.
 * "recipient" will be able to withdraw funds with withdraw.js script.
 *
 * command: truffle exec scripts/1_send.js --network ropsten
 */
module.exports = async function (callback) {
  try {
    // Get Accounts
    const accounts = await web3.eth.getAccounts()
    const sender = accounts[0]
    const recipient = accounts[1]

    /** Setting variables.
     *
     * "amount" must be a multiple of the difference between the "stopTime" and "startTime"
     * more: https://docs.sablier.finance/streams#create-stream "The Deposit Gotcha"
     */

    const amount = 3600 // 1 wei/s
    const now = Math.round(new Date().getTime() / 1000) // current time
    const startTime = now + 180 // 3 min. from now
    const stopTime = startTime + 3600 // 1:03h from now

    /** Convert ETH to WETH.
     *
     * Sablier protocols accept only ERC-20 Tokens.
     */
    await web3.eth
      .sendTransaction({ from: sender, to: weth_address, value: amount })
      .on('receipt', function (receipt) {
        console.log('ETH has been converted to WETH...')
      })
      .on('error', function (error) {
        console.log('ETH->WETH convertion error: ', error)
      })

    /**
     * Approve Sablier to spend amount (3600 Wei).
     */
    await weth.methods
      .approve(sablier_address, amount)
      .send({ from: sender, gas: 5000000, gasPrice: 5000000000 })
      .on('receipt', function (receipt) {
        console.log('Sablier protocol has been approved to spent WETH...')
      })
      .on('error', function (error) {
        console.log('Approvement error: ', error)
      })

    /** Create the Stream.
     *
     * Once completed, console will return the stream ID.
     * You'll be ask to provide stream ID while executing withdraw.js.
     */
    await sablier.methods
      .createStream(recipient, amount, weth_address, startTime, stopTime)
      .send({ from: sender, gas: 5000000, gasPrice: 5000000000 })
      .on('receipt', function (receipt) {
        console.log(
          'Stream has been created...\n\nThe stream ID is: ',
          receipt.events.CreateStream.returnValues.streamId
        )
      })
      .on('error', function (error) {
        console.log('Stream creation error: ', error)
      })
  } catch (error) {
    console.log(error)
  }

  callback()
}
