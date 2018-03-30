import PropTypes from 'prop-types';

//The name of a product's properties are exactly the same (come from the server).
export const productPropTypes = {
  id:PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

//For our amazing collection, it would be counterintuitive to name as isRequired
// because those said decisions are up to the component that uses this collection.

export const productCollectionPropTypes = PropTypes.arrayOf(
  PropTypes.shape(productPropTypes),
);