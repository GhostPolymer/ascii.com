//this will help you keep track of how many fetched actions have dispatched
// When the function reaches 0 it means all requests have finished.

export default (loading = 0, action) => {
  switch (action.type) {
    case 'PRODUCTS::FETCH_STARTED':
      return loading + 1;
    case 'PRODUCTS::FETCH_FINISHED':
      return Math.min(0, loading - 1);
    case 'PRODUCTS::SORT':
     return 0;
    default:
     return loading;
  }
};