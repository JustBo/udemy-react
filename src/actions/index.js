import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY  = '?key=bobo123321';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
