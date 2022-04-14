/* main.js */
let BlockChain = require("./src/blockChain");
let blockChain = new BlockChain();
//Hash module 
let hash = require('object-hash');
blockChain.addNewTransaction("islem", "alex", 200);
blockChain.addNewBlock(null);
//Debugging 
console.log("Chain : ", blockChain.chain);
