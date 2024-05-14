
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
        const brokerCollection = database.collection("brokers");
        const referralCollection = database.collection("referrals");

        // Drop the existing collections
        await brokerCollection.deleteMany({});
        await referralCollection.deleteMany({});

        // Array of referral links
        const brokersData = [
            {
                name: 'Benjamin Davidson',
                brokerID: 'bdavidson',
                email: 'bdavidson@gsquaredfunding.com',
                phoneNumber: '(678)987-4386',
                referral: [{
                    company: 'All For You Productions, Inc.',
                    linkID: 'allforyouprod',
                    logo: 'allforyouprod.jpg',
                    application: 'AllForYouProductions',
                    broker: [
                        {
                            name: 'Benjamin Davidson'
                        }
                    ]
                },
                {
                    company: 'Bond It Logistics',
                    linkID: 'bonditlog',
                    logo: 'bonditlogistics.jpg',
                    application: 'BondItLogistics',
                    broker: [
                        {
                            name: 'Benjamin Davidson'
                        }
                    ]
                }
                ]
            },
            {
                name: 'David Brownlee',
                brokerID: 'dbrownlee',
                email: 'dbrownlee@gsquaredfunding.com',
                phoneNumber: '(678)916-5954',
                referral: []
            },
            {
                name: 'Elizabeth Murphy',
                brokerID: 'emurphy',
                email: 'emurphy@gsquaredfunding.com',
                phoneNumber: '(678)987-4397',
                referral: []
            },
            {
                name: 'Haley Bramble',
                brokerID: 'hbramble',
                email: 'hbramble@gsquaredfunding.com',
                phoneNumber: '(678)916-6941',
                referral: []
            },
            {
                name: 'Jason Beldick',
                brokerID: 'jbeldick',
                email: 'jbeldick@gsquaredfunding.com',
                phoneNumber: '(678)352-2427',
                referral: []
            },
            {
                name: 'Luis Salazar',
                brokerID: 'lsalazar',
                email: 'lsalazar@gsquaredfunding.com',
                phoneNumber: '(678)916-7522',
                referral: []
            },
            {
                name: 'Nathan Raczkowski',
                brokerID: 'nraczkowski',
                email: 'nathanr@gsquaredfunding.com',
                phoneNumber: '(678)352-2424',
                referral: []
            },
            {
                name: 'Paul Clark',
                brokerID: 'pclark',
                email: 'pclark@gsquaredfunding.com',
                phoneNumber: '(678)987-4393',
                referral: []
            },
            {
                name: 'Stephen Kleinrichert',
                brokerID: 'skleinrichert',
                email: 'skleinrichert@gsquaredfunding.com',
                phoneNumber: '(678)987-4383',
                referral: [{
                    company: 'Karen&King',
                    linkID: 'karenking',
                    logo: 'karen-king-logo.png',
                    application: 'KarenKing',
                    broker: [
                        {
                            name: 'Stephen Kleinrichert'
                        }
                    ]
                },
                {
                    company: '360 Freight Systems',
                    linkID: '360freightsys',
                    logo: '360freightsys.png',
                    application: 'FreightSystems',
                    broker: [
                        {
                            name: 'Stephen Kleinrichert'
                        }
                    ]
                },
                {
                    company: 'Low Cost Tristate Insurance',
                    linkID: 'lowcosttri',
                    logo: 'lowcost.jpg',
                    application: 'LowCostTristate',
                    broker: [
                        {
                            name: 'Stephen Kleinrichert'
                        }
                    ]
                }
                ]
            },
            {
                name: 'Todd Waller',
                brokerID: 'twaller',
                email: 'twaller@gsquaredfunding.com',
                phoneNumber: '(678)352-2439',
                referral: []
            }
        ]

        const referralsData = [
            {
                company: 'All For You Productions, Inc.',
                linkID: 'allforyouprod',
                logo: 'allforyouprod.jpg',
                application: 'AllForYouProductions',
                broker: [
                    {
                        name: 'Benjamin Davidson'
                    }
                ]
            },
            {
                company: 'Bond It Logistics',
                linkID: 'bonditlog',
                logo: 'bonditlogistics.jpg',
                application: 'BondItLogistics',
                broker: [
                    {
                        name: 'Benjamin Davidson'
                    }
                ]
            },
            {
                company: 'Karen&King',
                linkID: 'karenking',
                logo: 'karen-king-logo.png',
                application: 'KarenKing',
                broker: [
                    {
                        name: 'Stephen Kleinrichert'
                    }
                ]
            },
            {
                company: '360 Freight Systems',
                linkID: '360freightsys',
                logo: '360freightsys.png',
                application: 'FreightSystems',
                broker: [
                    {
                        name: 'Stephen Kleinrichert'
                    }
                ]
            },
            {
                company: 'Low Cost Tristate Insurance',
                linkID: 'lowcosttri',
                logo: 'lowcost.jpg',
                application: 'LowCostTristate',
                broker: [
                    {
                        name: 'Stephen Kleinrichert'
                    }
                ]
            }
        ]

        // Insert documents into the collection
        const brokersResult = await brokerCollection.insertMany(brokersData);
        const referralResult = await referralCollection.insertMany(referralsData);

        console.log(`${brokersResult.insertedCount} documents were inserted to Brokers`);
        console.log(`${referralResult.insertedCount} documents were inserted to Referrals`);

    } finally {
        // Close the client
        await client.close();
    }
}

// Call the main function
main().catch(console.error);
