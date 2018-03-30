import { combineReducers } from 'redux';
import all from './allProdcutsReducer';
import page from './pageProductsReducer';
import sort from './sortProductsReducer';
import loading from './loadingProductsReducer';
import hasMore from './notAnymoreProductsReducer';

export default combineReducers ({
  all,
  page,
  sort,
  loading,
  hasMore,
});