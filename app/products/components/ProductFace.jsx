import React from 'react';
import PropTypes from 'prop-types';
//creating the style
const ProductFace = ({ size, face }) => (
  <p style={{ fontSize: size }}>{face}</p>
);

ProductFace.propTypes = {
  size: PropTypes.number.isRequired,
  face: PropTypes.string.isRequired,
};

export default ProductFace;