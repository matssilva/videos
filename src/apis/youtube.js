import axios from 'axios';

const KEY = 'AIzaSyA58LDTc_-r37F0k7ESAIG7Q6SmSr8lgeU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
