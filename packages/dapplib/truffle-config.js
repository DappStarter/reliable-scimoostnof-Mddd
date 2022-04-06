require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind hockey harvest hidden swift tower'; 
let testAccounts = [
"0x05fb10c2e45dba6c4ff42e36204252198a6e87dfd0243cc88f107bbe0e51532d",
"0x1650bb5f6b0b42c113b7da3f7433736702c09cddb4f2701125894037a69603fe",
"0x2c3238d3c08e66c3324878a2241ab7cb8840350c85a7ac90cc6f63312976d70d",
"0x67eab3d66e48adf7c05d0a40d0448b1d88cb5558e0871ada792b4048d09b8f6c",
"0x779c3ffbdc6e4efc79c8c16dc2cce98b06f7cd909b3541ba5e66010387e48f75",
"0x5b6666eea260ad482a828105186ac8dff8a3184c6e925ff28fbae9396a70b165",
"0x347bda776c63960da2572fe25b44a7b2879f6dcd4c3a7962501f4d841dcefa9d",
"0x8498a3926cd21d5d21647af2a381bd35c3dcd912fd710929bdba19c1a05cd8c2",
"0x4774fb94d99bccccb48918b067744acd8634889633cec3825abde0be932fee14",
"0x385298d443c111af6a3430dfd36fe8fbb7260e3c92f6f94a60ecd204f9aac043"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


