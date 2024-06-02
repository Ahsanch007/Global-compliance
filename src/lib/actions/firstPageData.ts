'use server';
import axios from 'axios';

export const getFirstPageData = async () => {
  const firstPageData = await axios.get('https://api.restdot.com/api/cms-page/page-body/1');
  
  return firstPageData.data;
};
