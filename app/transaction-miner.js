const Transaction = require("../wallet/transaction");
const { validTransaction } = require("../wallet/transaction");

class TransactionMiner{
    constructor({ blockchain, transactionPool, wallet, pubsub }){
        this.pubsub = pubsub;
        this.blockchain = blockchain;
        this.wallet = wallet;
        this.transactionPool = transactionPool;
    }
    mineTransactions() {
        const validTransactions = this.transactionPool.validTransactions();

        validTransactions.push(
            Transaction.rewardTransaction({minerWallet: this.wallet})
        );

        this.blockchain.addBlock({ data: validTransactions });


        this.pubsub.broadcastChain();

        this.transactionPool.clear();
    }
}

module.exports = TransactionMiner;