import React from 'react';
import PropTypes from 'prop-types';
import dateInterval from '../../utils/dateInterval'

const ProductDate = ({ date }) => (
  <p>{dateInterval({ dateStr: date })}</p>
);

ProductDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ProductDate;