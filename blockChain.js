const TARGET_HASH = hash(1560);
let validator = require("./validator");

class BlockChain {

    constructor(){
        this.chain = [];
        this.curr_transaction = [];
    }


   AddNewBlock(prevHash) {

     let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.curr_transactions,
            prevHash: prevHash
        };

        if(validator.proofOfWork() == TARGET_HASH){
            block.hash = hash(block);
            let newBlock = new BlockChainModel(this.block);
            newBlock.save( (err) =>{
             
            return console.log(chalk.red("This is a Cant Save in DB ", err.message));
            console.log(chalk.green("Success Save"));
            })
        }

        
          
        }