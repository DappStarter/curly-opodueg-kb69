require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture street return rural modify grace define army genuine'; 
let testAccounts = [
"0x8b6bdb5e782a1816dcce7eddf2730cc19569ac3e188221961af14982c3b33c4b",
"0x6be67c29df5531c36f21e550a1264ca7f6c4d972695931d197e1806d81590fa9",
"0x0256564bb7c3780acc686b95c59aaba0655ad5812450f7985940f0b5b6de4954",
"0x1ac95afa69ad6f2a72cd07f59279d1a51c79187fe36fe1f50e1e28be3a8d61ce",
"0xd5368f16e7bb8eefa67582097ed4b09c7609453ef4c04ce23e715c237481e8f8",
"0x588f58ad4b28e3b4112e9ba816d88c46285ab5c319f158a819c68c083c8dabab",
"0x0cd87365bc64a7cdd8b39badfc5ee538d495247c1344706737fb3c53b2e1bd53",
"0xb5c1a7fe3f515a8895e99ae5bfbf6e5fbccb9e16d048ad158b37813ac875d03f",
"0xd029ebf36edea8db05524ecfef59cd2259f173cc4f48fc0e7e120399024d6ed0",
"0x9ac96ad342d1113d3753acf625700834896fbee32143fbc636444e913b4562a8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

