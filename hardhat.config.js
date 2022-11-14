require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: "https://quaint-maximum-reel.ethereum-goerli.discover.quiknode.pro/8d0e4c0b25d7fdba082340aeaa3d854b9c56416a",
      accounts: [`dd01568dd6c71159bb169fad33c5acb6345a7fb494ef42992f43013619839bf1`]
    },
  },
};