import React from 'react';
import PropTypes from 'prop-types';
 
test('ProductSize', () => {
  expect(renderer.create(
  <ProductSize
    size={12}
  />,  
  )).toMatchSnapshot();
});

export default ProductSize;