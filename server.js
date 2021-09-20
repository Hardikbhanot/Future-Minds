const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const next = require('next');
const mongoose = require('mongoose');

dotenv.config();
const logger = require('./logger/index');
const port = process.env.PORT || 8000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Import all server routes
const newsletterRoutes = require('./backend/routes/public/newsletter');
const stepdegreeRoutes = require('./backend/routes/public/stepDegree');
const publicRoutes = require('./backend/routes/public/public');
const userPublicRoutes = require('./backend/routes/public/user');
const coursePublicRoutes = require('./backend/routes/public/course');

// Connect to Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  } catch (error) {
    logger.error('MongoDB Connection failed');
    process.exit(1);
  }
};

connectDB();

app
  .prepare()
  .then(() => {
    const server = express();
    // to accept body as json in api routes
    server.use(express.json());
    server.use(cors());
    // pass routes starting with /api to backend
    server.use('/backend/api/', publicRoutes);
    server.use('/backend/api/newsletter', newsletterRoutes);
    server.use('/backend/api/stepdegree', stepdegreeRoutes);
    server.use('/backend/api/user', userPublicRoutes);
    server.use('/backend/api/course', coursePublicRoutes);
    server.use(
      '/isa-syllabus',
      express.static(__dirname + '/public/syllabus/syllabus-ISA-FM.pdf')
    );
    // pass all the other routes to nextJS frontend
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`app is listning at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    logger.error(error.stack);
    process.exit(1);
  });
