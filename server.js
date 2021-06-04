// Requirements
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
// const next = require('next');
// const environment = process.env.NODE_ENV !== 'production';

// Public Routes
const generalRoutes = require('./src/Routes/public/general');

const app = express();
// const nextServer = next({ environment });
// To access auth-token in frontend
const corsOptions = {
  exposedHeaders: 'auth-token'
};
app.use(cors(corsOptions));
dotenv.config();

// Middlewares
app.use(express.json());

// nextServer
//   .prepare()
//   .then(() => {})
//   .catch((error) => {
//     console.log(error.stack);
//     process.exit(1);
//   });

// Public Route Middlewares
app.use('/api/', generalRoutes);

// Private Route Middlewares

// Check for development or production
if (process.env.NODE_ENV === 'production') {
  // get build files in server
  app.use(express.static(path.join(__dirname, '/client/build')));

  // every get request is send to index.html in /client/build
  // react will handle rest
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use('/', (req, res) => {
    res.send('App is running in development mode');
  });
}

// Listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`app is listning at http://localhost:${port}`);
});
