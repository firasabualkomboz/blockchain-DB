//change name from proof to TARGET_HASH just to make it simple
const TARGET_HASH = hash(1560);
//require the validator which is an Object that holds the proofOfWork and validProof methods
let validator = require("./validator");

class BlockChain {
...
   AddNewBlock(prevHash) {
     //Construct a New Block
     let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.curr_transactions,
            prevHash: prevHash
        };
        /*Later we need to remove the prevHash method argument and get it from the saved block on 
        the Database*/
        if (validator.proofOfWork() == TARGET_HASH) {
            //Block is Valid and we can add it to the Database 
            //Set current block's Hash (by hashing it)
            block.hash = hash(block);
            //TODO: Next thing is Database Saving
         });
   }