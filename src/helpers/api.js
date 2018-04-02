import { API_BASE_URL } from './constantsApp';

export const getProductsAPI = (limit, offset, sort) => 
  `${API_BASE_URL}/products?limit=${limit}&skip=${offset}&sort=${sort}`;