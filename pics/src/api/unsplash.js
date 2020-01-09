import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {    
        Authorization: 'Client-ID a5aba5c24fa16caada31d464c9691433f8574335aecca8aac536a152d6654965'
    }
    
});