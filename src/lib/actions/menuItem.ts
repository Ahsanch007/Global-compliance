'use server';
import axios from 'axios';

export const getMenuItem = async () => {
  const menuItem = await axios.get('https://api.restdot.com/api/cms-menu/get');

  return menuItem.data;
};
