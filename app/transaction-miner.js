class TransactionMiner{
    constructor({ blockchain, transactionPool, wallet, pubsub }){
        this.pubsub = pubsub;
        this.blockchain = blockchain;
        this.wallet = wallet;
        this.transactionPool = transactionPool;
    }
    mineTransaction() {
        // get the transaction pool's valid transactions

        // generate the miner's reward

        // add a block consisting of these transactions to the blockchain

        // broadcast the updated blockchain

        // clear the pool
    }
}

module.exports = TransactionMiner;