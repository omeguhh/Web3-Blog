require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv")

dotenv.config()


module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://arbitrum-rinkeby.infura.io/v3/c4e0e13bd5ea46488b4e8c7b02cd0920`,
      accounts: [proccess.env.pk]
    },
    //mainnet: {
    //  url: `https://arbitrum-mainnet.infura.io/v3/${projectId}`,
    //  accounts: [privateKey]
    //}
  }
};
