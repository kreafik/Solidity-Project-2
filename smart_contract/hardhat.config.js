// https://eth-ropsten.alchemyapi.io/v2/9XG3x_EJj4751vCPaWPjBRuhTcaFLZHR

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9XG3x_EJj4751vCPaWPjBRuhTcaFLZHR',
      accounts: [ '33e83d29b8ee94f8681d8019cbe121188d0235757b7cb5be196801bd9ceaa533' ]
    }
  }
}