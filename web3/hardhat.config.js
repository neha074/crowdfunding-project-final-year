/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork:'mumbai',
    networks:{
      hardhat:{},
      mumbai:{
        url: 'https://rpc.ankr.com/polygon_mumbai',  //alchemy link - create in alchemy and use it in front end is what he means ig
        accounts: [`0x58659643d30e1b7b75a67773762bafdb868e6ca64f29732e8aa70a999ab4309a`]
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
