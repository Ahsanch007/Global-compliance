'use server';
import axios from 'axios';

export const getUserInfo = async () => {
  const userInfo = await axios.get('/api/userInfo');
  return userInfo.data;
};
