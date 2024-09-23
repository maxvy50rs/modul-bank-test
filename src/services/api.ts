import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/plushevy/demo',
});

export default instance;
