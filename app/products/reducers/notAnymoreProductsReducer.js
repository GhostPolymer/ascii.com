export default (hasMore = true, action) => {
  switch (action.type) {
    case 'PRODUCTS: NOT_ANYMORE':
      return false;
    case 'PRODUCTS::SORT':
      return true;
    default:
      return hasMore;
  }
};