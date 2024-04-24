const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const http = require('http');
const cors = require('cors');
const { json } = require('body-parser');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Set up middleware before attaching Apollo Server middleware
app.use(cors());
app.use(json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async () => {
  try {
    // Wait for the database connection to open
    await db.once('open', () => {
      server.start().then(() => {
        // Attach Apollo Server middleware to the Express app
        app.use('/graphql', expressMiddleware(server));
        // Start the HTTP server
        httpServer.listen({ port: PORT }, () => {
          console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
        });
      });
    });
  } catch (error) {
    console.error('Failed to start Apollo Server', error);
  }
};

startApolloServer();
