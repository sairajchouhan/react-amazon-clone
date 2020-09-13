import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/react--clone-b3bcc/us-central1/api', // api url i.e., cloud function url
});

export default instance;
