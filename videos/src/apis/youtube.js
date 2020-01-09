import axios from 'axios';

const KEY = 'AIzaSyAzgTJQ9yERYgX8ZHviNxwJSRjF_xKYPBE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});