/* main.js */
let BlockChain = require("./blockChain");
let blockChain = new BlockChain();
//Hash module 
let hash = require('object-hash');
blockChain.addNewTransaction("abu", "komboz", 200);
blockChain.addNewBlock(null);
//Debugging 
console.log("Block-Chain : ", blockChain.chain);
