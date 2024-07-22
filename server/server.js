const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const http = require('http');
const cors = require('cors');
const { json } = require('body-parser');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const connection = require('./config/connection');
const express = require('express');
require("dotenv").config();
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto');
const mongoose = require('mongoose');

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const PORT = process.env.PORT || 3001;

const startApolloServer = async () => {
  try {
    await connection;

    console.log('Connected to MongoDB');

    const storage = new GridFsStorage({
      url: process.env.MONGODB_URI,
      options: { useUnifiedTopology: true },
      file: (req, file) => {
        return new Promise((resolve, reject) => {
          crypto.randomBytes(16, (err, buf) => {
            if (err) {
              console.error('Error generating random bytes:', err);
              return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
              filename: filename,
              bucketName: 'uploads'
            };
            resolve(fileInfo);
          });
        });
      }
    });

    storage.on('connection', (db) => {
      console.log('GridFS connected');
    });

    storage.on('error', (err) => {
      console.error('GridFS error:', err);
    });

    const upload = multer({ storage });

    app.use(cors());
    app.use(json());

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/build')));
    }

    app.post('/upload', upload.single('file'), (req, res) => {
      if (!req.file) {
        console.error('No file uploaded');
        return res.status(400).send('No file uploaded');
      }
      console.log('File uploaded successfully:', req.file);
      // Return the URL where the file can be accessed
      const fileUrl = `/file/${req.file.filename}`;
      res.status(200).json({ file: { filename: req.file.filename, url: fileUrl } });
    });
    
    app.get('/file/:filename', (req, res) => {
      const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        bucketName: 'uploads'
      });
      bucket.openDownloadStreamByName(req.params.filename)
        .pipe(res)
        .on('error', (err) => {
          console.error('Error retrieving file:', err);
          res.status(404).send('File not found');
        });
    });

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });

    server.start().then(() => {
      app.use('/graphql', expressMiddleware(server));
      httpServer.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
      });
    });
  } catch (error) {
    console.error('Failed to start Apollo Server', error);
  }
};

startApolloServer();
