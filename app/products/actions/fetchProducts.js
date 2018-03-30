import ndjsonStream from 'can-ndjson-stream';

export const fetchProductsSucceeded = products => ({
  type: 'PRODUCTS::FETCH_SUCEEDED',
  products,
});

export const fetchProductsNotAnymore = () => ({
  type: 'PRODUCTS::NOT_ANYMORE',
});

export const fetchProductsStarted = () => ({
  type:'PRODUCTS::FETCH_STARTED',
});

export const fetchProductsFinished = () => ({
  type:'PRODUCTS::FETCH_FINISHED',
});

export default () => (dispatch, getState) => {
  dispatch(fetchProductsStarted());
  
  
  let notAnymoreProducts = true;
  
  const products = {};
  
  const {page, sort} = getState().products;
  const skip = page * API_PER_PAGE;
  fetch('${API_HOST}/api/products?skip=${skip}&sort=${sort}&limit=${API_PER_PAGE}')
    .then(date => ndjsonStream(data.body))
    .then((stream) => {
      const streamReader = stream.getReader();
      const readHandler = (result) => {
        if (result.done) {
          dispatch(fetchProductsSucceeded(products));
          dispatch(fetchProductsFinished());
          if (notAnymoreProducts) dispatch(fetchProductsNotAnymore());
          return;
        }
        
        notAnymoreProducts = false;
        
        products[result.value.id] = (result.value);
        
        streamReader.read().then(readHandler);
      };
      streamReader.read().then(readHandler);
    });
};