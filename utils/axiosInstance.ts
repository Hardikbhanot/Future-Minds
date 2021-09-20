import axios from 'axios';

const port = process.env.PORT || 3000;
const NodeEnv = process.env.NODE_ENV;

const configs = {
  development: {
    SERVER_URI: `http://localhost:${port}/backend/api`
  },
  production: {
    SERVER_URI: 'https://futureminds.in/backend/api/'
  },
  test: {
    SERVER_URI: `http://localhost:${port}/backend/api`
  }
};

const instance = axios.create({
  baseURL: `${configs[NodeEnv].SERVER_URI}`
});

export default instance;
