import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-react--clone-b3bcc.cloudfunctions.net/api',
});

export default instance;

// 'http://localhost:5001/react--clone-b3bcc/us-central1/api', // api url i.e., cloud function url
// https://us-central1-react--clone-b3bcc.cloudfunctions.net/api
