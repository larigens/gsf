
const { MongoClient } = require('mongodb');
require('dotenv').config();

// MongoDB connection URI from .env file
const uri = process.env.MONGODB_URI;

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Access the database and collection
        const database = client.db("gsf");
        const collection = database.collection("brokers");

        // Array of referral links
        const referralLinks = [
            {
                name: 'Benjamin Davidson',
                referralID: 'bdavidson',
                email: 'bdavidson@gsquaredfunding.com',
                phoneNumber: '(678)987-4386'
            },
            {
                name: 'David Brownlee',
                referralID: 'dbrownlee',
                email: 'dbrownlee@gsquaredfunding.com',
                phoneNumber: '(678)916-5954'
            },
            {
                name: 'Elizabeth Murphy',
                referralID: 'emurphy',
                email: 'emurphy@gsquaredfunding.com',
                phoneNumber: '(678)987-4397'
            },
            {
                name: 'Haley Bramble',
                referralID: 'hbramble',
                email: 'hbramble@gsquaredfunding.com',
                phoneNumber: '(678)916-6941'
            },
            {
                name: 'Jason Beldick',
                referralID: 'jbeldick',
                email: 'jbeldick@gsquaredfunding.com',
                phoneNumber: '(678)352-2427'
            },
            {
                name: 'Luis Salazar',
                referralID: 'lsalazar',
                email: 'lsalazar@gsquaredfunding.com',
                phoneNumber: '(678)916-7522'
            },
            {
                name: 'Nathan Raczkowski',
                referralID: 'nraczkowski',
                email: 'nathanr@gsquaredfunding.com',
                phoneNumber: '(678)352-2424'
            },
            {
                name: 'Paul Clark',
                referralID: 'pclark',
                email: 'pclark@gsquaredfunding.com',
                phoneNumber: '(678)987-4393'
            },
            {
                name: 'Stephen Kleinrichert',
                referralID: 'skleinrichert',
                email: 'skleinrichert@gsquaredfunding.com',
                phoneNumber: '(678)987-4383'
            },
            {
                name: 'Todd Waller',
                referralID: 'twaller',
                email: 'twaller@gsquaredfunding.com',
                phoneNumber: '(678)352-2439'
            }
        ]

        // Insert documents into the collection
        const result = await collection.insertMany(referralLinks);

        console.log(`${result.insertedCount} documents were inserted`);
    } finally {
        // Close the client
        await client.close();
    }
}

// Call the main function
main().catch(console.error);
