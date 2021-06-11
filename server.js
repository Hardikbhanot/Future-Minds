const dotenv = require('dotenv');
const express = require('express');
const next = require('next');
const mongoose = require('mongoose');

dotenv.config();
const port = process.env.PORT || 8000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Import all server routes
const publicRoutes = require('./backend/routes/public/public');
const coursePublicRoutes = require('./backend/routes/public/course');
const studentPublicRoutes = require('./backend/routes/public/student');
const instructorPublicRoutes = require('./backend/routes/public/instructor');

// Connect to Database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connection successful');
  } catch (error) {
    console.log('MongoDB Connection failed');
    process.exit(1);
  }
};

connectDB();

app
  .prepare()
  .then(() => {
    const server = express();
    // pass routes starting with /api to backend
    server.use('/api/', publicRoutes);
    server.use('/api/course', coursePublicRoutes);
    server.use('/api/student', studentPublicRoutes);
    server.use('/api/instructor', instructorPublicRoutes);

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
    console.error(error.stack);
    process.exit(1);
  });
