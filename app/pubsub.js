const Pubnub = require("pubnub");

const credentials = {
publishKey: 'pub-c-dcf9a268-6217-46ce-9936-de89b75d4fdf',
subscribeKey: 'sub-c-5fa0c0ae-4d41-11ec-a729-02086258e09d',
secretKey: 'sec-c-Yzc2N2FkMTAtZGRiNi00NDJkLWFlYzItZDFlODQyZWM3ZTdi'
};

const CHANNELS = {
    TEST : 'TEST',
    BLOCKCHAIN : 'BLOCKCHAIN'
};
class PubSub{
    constructor({ blockchain }){
        this.blockchain = blockchain;
        this.pubnub = new Pubnub(credentials);
        this.pubnub.subscribe({channels: Object.values(CHANNELS)});

        this.pubnub.addListener(this.listener());
    }
    listener(){
        return{
            message: messageObject =>{
                const{ channel, message } = messageObject;
                console.log(`Message receieved. Channel: ${channel}. Message: ${message}.`);
                const parsedMessage = JSON.parse(message);

                if(channel === CHANNELS.BLOCKCHAIN){
                    this.blockchain.replaceChain(parsedMessage);
                }
            }
        };
    }

    publish({ channel,message }){
        this.pubnub.unsubscribe(channel,()=>{
            this.pubnub.publish( channel, message, () => {
                this.pubnub.subscribe(channel);
            });
        });
        
    }
    broadcastChain(){
        this.pubnub.publish({
            channel: CHANNELS.BLOCKCHAIN,
            message: JSON.stringify(this.blockchain.chain)
        });
    }
} 

module.exports = PubSub;