import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN
export default axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: { 
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    'Content-Type': 'application/json' 
  }
});