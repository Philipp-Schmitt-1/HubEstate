// Import the required Solana libraries
const solanaWeb3 = require('@solana/web3.js');

// Set up Solana connection, wallet, and other related configurations
const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl('devnet'),
    'confirmed'
);

// Export configurations for use in routes
module.exports = {
    connection
};
