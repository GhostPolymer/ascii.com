import React from 'react';
import PropTypes from 'prop-types';

import Ads from '../../server/ads';
import Product from './Products';

const ProductList = ({ products }) => {
  return (
    <div className='products-grid'>
      {(products || []).map((product, index) => {
        return (
          <div className='product-ad-wrapper' 
               key={product.id}>
            <Product product={product} />
            <Ads key={`ad-${index}`} 
                 index={index} />
          </div>
        );
      })}
    </div>
  );
};
ProductList.propTypes = {
  products: PropTypes.array,
};


export default ProductList;