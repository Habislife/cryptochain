const MINE_RATE = 1000;
const INTIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
timestamp: 1,
lastHash: '----',
hash: 'hash-one',
difficulty: INTIAL_DIFFICULTY,
nonce: 0,
data : []
};
module.exports = {GENESIS_DATA, MINE_RATE};