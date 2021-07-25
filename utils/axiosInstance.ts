import axios from 'axios';

const port = process.env.PORT || 3000;
const NodeEnv = process.env.NODE_ENV;

const configs = {
  development: {
    SERVER_URI: `http://localhost:${port}`
  },
  production: {
    SERVER_URI: ''
  },
  test: {
    SERVER_URI: `http://localhost:${port}`
  }
};

const instance = axios.create({
  baseURL: `${configs[NodeEnv].SERVER_URI}`
});

export default instance;
