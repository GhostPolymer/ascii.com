import React from 'react';
import PropTypes from 'prop-types';
import ProductGridItem from 'ProductGridItem';
import { productCollectionPropTypes } from './productPropTypes';
import Ad from '../../ads/components/Ad';

const shoulInsertAd = index => (index + 1) % 20 === 0;

const ProductGrid = ({ products }) => (
<div className="col-2">
  {products.map((product, index) => ([
    <ProductGridItem key={product.id}{...product} />,
    shoulInsertAd(index) && <Ad key={index} />,
  ]))}
</div>
);

ProductGrid.propTypes = {
  products: productCollectionPropTypes.isRequired,
};

export default ProductGrid;